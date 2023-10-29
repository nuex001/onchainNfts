
const { network } = require("hardhat");
const { verify } = require("../utils/verify");
const { developmentChains } = require("../utils/constant")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const testnft = await deploy("TESTNFT", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 2,
  })
  // console.log(contract);
  log("________________________________")
  if (
    !developmentChains.includes(network.name) &&
    process.env.POLYGONSCAN_API_KEY
  ) {
    await verify(testnft.address, [])
  }
}