---
title: "What is the intuition behind the implementation of a flashloan?"
description: "How to understand"
pubDate: "Feb 08 2025"
heroImage: "/intuition_of_flashloans.webp"
tags: [ "blockchain", "flashloans", "intuition", "pseudocode" ]
---

In the flashloan world we have 2 entities: the **Lender** and the **Borrower**. 

The Lender lends tokens to the borrower and makes sure that they are returned before the end of the transaction (plus a fee).

The Borrower is asking for tokens, does some actions that will hopefully increase the value of the borrowed money and then returns the borrowed amount plus a fee.

In pseudocode:

```javascript
Lender {
    function borrow(amount) {
        send amount of tokens to the caller
        trigger caller's onFlashLoan function
        ensure (amount + fee) tokens were returned
    }
}
```

```javascript
Borrower {
    function borrowTokens(amount){
        lender.borrow(amount);
    }

    function onFlashLoan(amount) {
        ensure the caller is the lender
        do arbitrage with the borrowed amount
        return the borrowed amount + fee
        keep profit
    }
} 
```

As we see the borrower is not an EOA (Externally Owned Account) but a smart contract as well that can execute actions with the borrowed liquidity. Typically, the actions that are executed yield profit more than the fee charged by the Lender. The profit then is either kept in the borrower with some mechanism to withdraw it or it can be sent to a pre-set EOA.