---
title: "Flashloan applications"
description: "How can they be used to make profit, manage collateral, attacks and equalize the DeFi field"
pubDate: "Feb 17 2025"
heroImage: "/flashloan_use_cases.webp"
tags:
  [
    "flashloans",
    "solidity",
    "blockchain",
    "applications",
    "attacks",
    "DeFi",
    "hacks",
    "use_cases",
    "profitability",
  ]
---

Flashloans have found wide range of applications in the blockchain ecosystem. One of the most important functions of flashloans is that they equalize the field and possibilities such as arbitrage that were available only to wealthy individuals and companies in the past, are now available for everyone. In the following section we go over some of the most important applications of flashloans.

### Arbitrage

One of the first and most frequent applications of flashloans is in arbitrage. An example would be a different price for the same token in 2 decentralized exchanges. Then one could borrow money using a flashloan, buy the token from the “cheaper” exchange and sell it to the other, return the flashloan and keep the profit. This is also providing a service to the community by making the market more efficient.

### Closing Collateralized Debt Position (CCDP)

As discussed before, in order to get a loan from a DeFi service, overcollateralization is needed. Therefore, one must lock a collateral in the form a cryptocurrency in order to get the loan and the collateral is locked until the loan is repaid. However, during periods of volatility, the collateral’s value might be affected so severely that it might be liquidated if the borrower is unable to repay the loan and unlock the collateral. With flashloans we can do the following:
Suppose one has locked ETH collateral to get a loan in DAI stablecoins. At some point ETH is starting to lose value and there might be the risk of liquidation. The borrower can then borrow money from a flashloan, repay the debt, unlock the ETH collateral and sell only the ETH amount needed to repay the flashloan, therefore saving him from complete liquidation of the collateral.

### Collateral Swap

Many platforms e.g. Aave are offering multiple choices on the type of collateral needed for a loan. In certain cases, the user might want to change the type of collateral locked. For example, the collateral (e.g. WBTC) might be appreciating in value rapidly and the user might want to sell it. The user can then borrow money from a flash loan, repay the debt and unlock the collateral, convert the collateral to a new one, lock the new one and get a new loan to repay the flashloan. In this way, the user changed the locked collateral without using own funds.

### Wash trading

An unfortunate application of flashloans is for wash trading: the procedure of influencing the market and its opinion by inflationary trading. Exchanges and in this case decentralized exchanges need to show as much trading volume as possible in order to gain credibility in the market. Flashloans can be used to make many bogus transactions at a minimal cost. According to [this paper](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3530220), about 70% of the reported volume of unregulated exchanges is attributed to wash trading. An example of a wash trading transaction can be found here:

<style>
  img {
    max-width: 800px;
    width: 100%;
    height: auto;
  }
</style>

![example of wash trading](/wash_trading.png)

<figcaption>
  Wash trading example. <a href="https://etherscan.io/tx/0xf65b384ebe2b7bf1e7bd06adf0daac0413defeed42fd2cc72a75385a200e1544" target="_blank">Source</a>
</figcaption>
</figure>

In this example a small 0.01WETH flashloan is taken from dYdX, then it’s converted into 122.19 LOOM and back to 0.00994 WETH and then the 0.01 WETH is returned to dYdX flashlender with a small loss. The fact that the flashloan was carried out even though there was a loss, makes it very suspicious as an example of pushing up the trading volume.

### Maximal Extractable Value (MEV)

Maximal Extractable Value or MEV refers to the maximum profit that can be extracted from block production beyond the standard reward and gas fees by including, excluding or reordering transactions within a block. Examples of MEV are: arbitrage opportunities (discussed previously), liquidation exploits, front- and back-running.

**Liquidation exploits**: In certain lending platforms, if a borrower’s collateral falls below a certain threshold, their position can be liquidated. They provide the opportunity of external users triggering the liquidation and profiting for their action as “service provision” to the platform. A malicious actor could get flashloans on certain assets to manipulate their price and trigger liquidations that would otherwise not be liquidated.

**Front and back-running**: An attacker could observe the mempool for large buy transactions and if they find one, the attacker gets a flashloan, buys the same token and sends a buy order with a higher gas fee than the victim. When the victim’s order executes with the token appreciating even more in price, the attacker sells the token and keeps the profit. Similarly, with back-running with sell orders.

**Did I forget something? Let me know in the comments below** 👇
