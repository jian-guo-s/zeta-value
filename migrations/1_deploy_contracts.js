const MultiChainValue = artifacts.require("MultiChainValue");
const { getAddress } = require("@zetachain/protocol-contracts");

module.exports = function(deployer,network) {
  const connector = getAddress("connector", "goerli_testnet");
  const zetaToken = getAddress("zetaToken", "goerli_testnet");
  deployer.deploy(MultiChainValue,connector,zetaToken);
};
