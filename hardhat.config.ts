import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";
import "hardhat-tracer";
import { task, HardhatUserConfig } from "hardhat/config";
import "ts-node/register";

import dotenv from "dotenv";
dotenv.config();
const mnemonic = process.env.MNEMONIC;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
      },
    ],
  },
  networks: {
    localhost: {
      gasPrice: 470000000000,
      chainId: 43114,
      url: "http://127.0.0.1:8545/ext/bc/C/rpc",
    },
    hardhat: {
      gasPrice: 470000000000,
      chainId: 43114,
      initialDate: "2020-10-10",
      forking: {
        url: "https://api.avax.network/ext/bc/C/rpc",
        enabled: true,
      },
      accounts: {
        accountsBalance: "1000000000000000000000000000000",
        count: 50,
      },
    },
    avash: {
      url: "http://localhost:9650/ext/bc/C/rpc",
      gasPrice: 470000000000,
      chainId: 43112,
      accounts: [
        "0x56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027",
      ],
    },
    fuji: {
      accounts: {
        mnemonic,
      },
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gas: 8000000,
      gasPrice: 225000000000,
      timeout: 30000,
      chainId: 43113,
    },
    mainnet: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      gasPrice: 220000000000,
      chainId: 43114,
      accounts: [],
    },
  },
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  gasReporter: {
    enabled: true,
    showTimeSpent: true,
    gasPrice: 225,
  },
};

export default config;
