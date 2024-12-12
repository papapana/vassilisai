---
title: "Flashloan use cases"
description: "How can they be used to make profit, manage collateral and equate the DeFi field"
pubDate: "Oct 23 2024"
heroImage: "/flashloan_use_cases.webp"
tags: [ "flashloans", "solidity", "blockchain", "use_cases", "profitability" ]
---

## How to make profit using flashloans

### Arbitrage

Flashloans could be used to borrow large amounts of tokens and exploit arbitrage opportunities. These could be for
example cross-exchange price differences, e.g. WETH price is 2000 USDT in one DEX (decentralized exchange) and
2010 USDT in another. Therefore one can borrow 2000 USDT, buy WETH in one exchange, sell them for 2010 in another.
Assuming a fee of 0.3% (Uniswap), one must return 2000+6 USDT leaving $4 as profit.

Arbitrage opportunities can also exist in cycles in the same DEX, e.g. exchanging WETH for WBTC for UNI and then back
to WETH could result in having more WETH than in the beginning. When 3 assets are involved as here, we call it a
triangular arbitrage.

Allegedly the first flashloan ever made was done by a group called _Flash Boys_ belonging to the _Arbirtrage DAO_.
Their arbitrage transaction can be
found [here](https://etherscan.io/tx/0x4555a69b40fa465b60406c4d23e2eb98d8aee51def21faa28bb7d2b4a73ab1a9).

