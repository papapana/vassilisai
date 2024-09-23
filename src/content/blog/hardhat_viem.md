---
title: "Hardhat viem common patterns in testing"
description: "Common patterns to remember when testing a smart contract with viem"
pubDate: "Sep 23 2024"
heroImage: "/smart_contracts.webp"
tags: [ "hardhat", "solidity", "blockchain", "testing" ]
---

Here I am sharing snippets that have been very helpful to me while testing smart contracts with `hardhat-viem`.
I found it more counter-intuitive that `ethers` and I am pointing out some of `viem` particularities.

## Common imports

```typescript
import {loadFixture} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import {expect} from "chai";
import hre from "hardhat";
```

## Deploying a contract

```typescript
const deploy = async (): Promise<DeployResult> => {
    const [owner, addr1, addr2] = await hre.viem.getWalletClients();
    const hardhatToken = await hre.viem.deployContract("Token");
    return {hardhatToken, owner, addr1, addr2};
}
```

## Getting information about account

Pay attention to `read` and `.account`.

```typescript
const {hardhatToken, owner} = await loadFixture(deploy);
console.log(owner.account.address)
const ownerBalance = await hardhatToken.read.balanceOf([owner.account.address]);
```

## Calling `view` functions

Again, we need `read`.

```typescript
const maxSupply = await hardhatToken.read.maxSupply();
```

## Calling a `payable` function with a custom address

```typescript
expect(hardhatToken.write.transfer([owner.account.address, 10],
    {account: addr1.account.address})).to.be.rejectedWith("not enough tokens");
```