---
title: "How can a flashloan even be possible?"
description: "What makes flashloans possible"
pubDate: "Feb 16 2025"
heroImage: "/curious.webp"
tags: ["blockchain", "flashloans", "intuition"]
---

A flashloan is a loan that doesn't need any collateral from the user, it can be a very big amount e.g. $1'000'000 and has minimal risk for both the borrower and the lender, namely the gas fee for the borrower and the opportunity cost to earn a percentage of the loan amount for the lender, in case the loan fails.

**But how is that possible?**

First of all, it is only possible on blockchain networks where transactions are atomic. This means that a transaction is either fully executed or not executed at all (i.e. the state is reverted to the initial state before the transaction started).

Additionally, _the borrower has to borrow and return the funds within the same transaction block_, otherwise the entire transaction fails and the blockchain state is rolled back.

The steps involved are usually:

- **Request a Loan**: The borrower makes the request
- **Loan approval**: the lender approves the loan and notifies the borrower
- **Use the funds**: the borrower uses the funds, e.g. for arbitrage
- **Repay the Loan**: the lender repays the loan or grants access to the lender to corresponding amount from his own account
- **Transaction validatioon**: The lender's smart contract checks whether the `loan + fees` has been repaid. If not, it _reverts the entire transaction_, preventing the lender from losing money.

To see more about the implementation, see [intuition of how to implement a flashloan](what-is-the-intuition-behind-the-implementation-of-a-flashloan).

### No collateral needed

Normally, loans require collateral to secure them. However, as we saw, using flashloans:

- if the borrower doesn't repay the loan in one transaction, everything is reverted. Therefore:
- the lender's money **are never at risk**. Either the lender gets repaid, or the transaction never happens.

### Risks

As everything is controlled by smart contracts, flashloans' primary risk is _smart contract risk_.
