require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("hardhat-deploy");
/** @type import('hardhat/config').HardhatUserConfig */
const TESTNET_RPC_URL =
  process.env.TESTNET_RPC_URL ||
  ""
const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  ""
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ""
module.exports = {
 solidity: {
  version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    mumbai: {
    url: TESTNET_RPC_URL,
    chainId: 80001,
    accounts: [PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  }
};
