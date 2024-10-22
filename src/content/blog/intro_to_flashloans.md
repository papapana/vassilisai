---
title: "What are flashloans?"
description: "Common patterns to remember when testing a smart contract with viem"
pubDate: "Oct 21 2024"
heroImage: "/intro_to_flashloans.webp"
tags: [ "blockchain", "flashloans" ]
---

# What are flashloans ?

First let's briefly mention what are _loans_.

## Loans

*A loan* is a sum of money borrowed from a _lender_ by a _borrower_, with the promise to
repay it, usually with interest (a surplus amount) over a specified period of time.

A _loan_ has the following characteristics:

| Principal                    | Interest                                   | Term                              | Collateral                                                                                                               |
|------------------------------|--------------------------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Amount Borrowed e.g. _$1000_ | Cost of borrowing, usually (%) e.g. _3.2%_ | Repayment period e.g. _36 months_ | Assets securing the loan (to be liquidated if the borrower doesn't honor the agreement) e.g. _the house of the borrower_ |

### Examples

Mortgages, Personal Loans, Auto Loans, Student Loans, Business Loans

## Flashloans

A _flashloan_ is a type of loan that is unique to the decentralized finance ecosystem (**DeFi**).
It is _uncollateralized_ and it is borrowed and repaid _within a single transaction block on a blockchain_.
This is often seconds or minutes.

According to our definition here are its characteristics:

| Principal                   | Interest                                      | Term                                     | Collateral |
|-----------------------------|-----------------------------------------------|------------------------------------------|------------|
| Max allowed by the protocol | Defined by the protocol e.g. _0.3% (Uniswap)_ | 1 transaction block (seconds or minutes) | 0          |

[//]: # (What might seem _counterintuitive_ is why it can only exist in the _DeFi_ ecosystem and _how can it be useful, since it is only for 1 transaction block.)

