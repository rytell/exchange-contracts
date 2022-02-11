# Rytell Smart Contracts

This repo contains all of the smart contracts used to run [Rytell](rytell.io).

## Deployed Contracts

Factory address: `0xe5e970FE3a90F314977a9Fd41e349486a9e8c4fe`

Router address: `0xa333EEBa817519B7F9C8B074b19Af7b6F8076e71`

## Running

These contracts are compiled and deployed using [Hardhat](https://hardhat.org/). They can also be run using the Remix IDE. A tutorial for using Remix is located [here](https://docs.avax.network/build/tutorials/platform/deploy-a-smart-contract-on-avalanche-using-remix-and-metamask).

To prepare the dev environment, run `yarn install`. To compile the contracts, run `yarn compile`. Yarn is available to install [here](https://classic.yarnpkg.com/en/docs/install/#debian-stable) if you need it.

## Accessing the ABI

If you need to use any of the contract ABIs, you can install this repo as an npm package with `npm install --dev @pangolindex/exchange-contracts`. Then import the ABI like so: `import { abi as IRytellPairABI } from '@pangolindex/exchange-contracts/artifacts/contracts/core/interfaces/IRytellPair.sol/IRytellPair.json'`.

## Attribution

These contracts were adapted from these Uniswap repos: [uniswap-v2-core](https://github.com/Uniswap/uniswap-v2-core), [uniswap-v2-periphery](https://github.com/Uniswap/uniswap-v2-core), and [uniswap-lib](https://github.com/Uniswap/uniswap-lib).
