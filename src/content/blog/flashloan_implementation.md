---
title: "How to implement a flashloan?"
description: "A more detailed view on implementing flashloans"
pubDate: "Oct 22 2024"
heroImage: "/flashloan_implem.webp"
tags: [ "ERC-3156", "solidity", "blockchain", ]
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
