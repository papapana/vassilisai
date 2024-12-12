---
title: "How to implement a flashloan?"
description: "A more detailed view on implementing flashloans"
pubDate: "Oct 22 2024"
heroImage: "/flashloan_implem.webp"
tags: [ "ERC-3156", "solidity", "blockchain", "flashloans" ]
---

## Understanding Flashloans at the implementation level

In the flashloan world we have 2 entities: the Lender and the Borrower.
The Lender lends tokens to the borrower and makes sure that they are returned before the end of the transaction
(plus a fee).

The Borrower is asking for tokens, does some actions that will hopefully increase the value of the borrowed money and
then returns the borrowed amount plus a fee.

In pseudocode:

```
Lender {
    function borrow(amount) {
        send amount of tokens to the caller
        trigger caller's onFlashLoan function
        ensure (amount + fee) tokens were returned
    }
}
```

```
Borrower {
    function borrowTokens(amount){
        lender.borrow(amount);
    }
    function onFlashLoan(amount) {
        ensure the caller is the lender
        do arbitrage with the borrowed amount
        return the borrowed amount + fee
    } 
}
```

## The ERC-3156 flashloan standard

The [ERC-3156](https://eips.ethereum.org/EIPS/eip-3156) standard is a proposal for flashloan functionality.
Before this standard, many diverging interfaces and implementations were developed e.g. by Uniswap, Aave etc.
In the following image, we can see an intuitive representation of the ERC-3156 flashloan standard:

![ERC-3156 flashloan standard](public/erc-3156_flashloan_standard.png)

### The Lender

The Lender provides 2 read-only functions:

- `maxFlashLoan(address token)`: Returns the maximum amount of tokens that can be borrowed by the lender.
- `flashFee(address token, uint256 amount)`: Returns the fee that must be paid for each flashloan transaction.
  Otherwise, the flashloan will revert.

and of course, the essential function:

```solidity
function flashLoan(
    IERC3156FlashBorrower receiver,
    address token,
    uint256 amount,
    bytes calldata data
) external returns (bool);
```

Let's unpack this for a bit:

- `receiver`: The address of the recipient of the tokens.
- `token`: The address of the token that needs to be borrowed.
- `amount`: The amount of tokens that need to be borrowed.
- `data`: Additional data that needs to be passed to the `receiver` contract.

But what can this `data` be used for?
An example could be:

```solidity
enum Action {ARBITRAGE, LIQUIDATE, COLLATERAL_SWAP}
```

It can provide a structured way to handle different types of loan logic both for the borrower and the lender.

### The Borrower

The Borrower needs to implement 2 essential functionalities:

The first functionality that is not defined how to be implemented is how to initiate/ask for a flashloan.
Let's assume that the Borrower defines it as follows:

```solidity
function flashBorrow(
    address token,
    uint256 amount
); 
```

In this function the Borrower must at least approve the transfer of the loaned amount and the fee to the Lender.
Additionally, the Borrower could specify what action they want to perform on the borrowed amount.
Finally, they have to call the `flashLoan` function of the Lender with the appropriate parameters, e.g.:

```solidity
lender.flashloan(this, token, amount, abi.encode(Action.ARBITRAGE));
```

The Borrower should take into account any existing approval of fund transfers to the Lender.
A full reference implementation of this function as found in the standard, following the description above:

```solidity
function flashBorrow(
    address token,
    uint256 amount
) public {
    bytes memory data = abi.encode(Action.NORMAL);
    uint256 _allowance = IERC20(token).allowance(address(this), address(lender));
    uint256 _fee = lender.flashFee(token, amount);
    uint256 _repayment = amount + _fee;
    IERC20(token).approve(address(lender), _allowance + _repayment);
    lender.flashLoan(this, token, amount, data);
}
```

The second mandatory functionality is to implement the `onFlashLoan` callback function in the Borrower contract.

```solidity
function onFlashLoan(
    address initiator,
    address token,
    uint256 amount,
    uint256 fee,
    bytes calldata data
) external returns (bytes32);
```

This is essentially where the Borrower can decide what to do with the borrowed amount.
At the end of this function, the Borrower should return the borrowed amount plus the fee.
Additionally, the borrower must returned an agreed hash of a string, e.g.:

```solidity
keccak256("ERC3156FlashBorrower.onFlashLoan");
```
