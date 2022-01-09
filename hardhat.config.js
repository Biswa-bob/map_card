require('@nomiclabs/hardhat-waffle');
require('@symblox/hardhat-abi-gen');  // Generate ABI config from contract
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ganache");
require('dotenv').config();

// Uncomment to deploy
require('hardhat-deploy');
require('hardhat-deploy-ethers');

module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
        details: {
          yul: false  // fix for optimizer and inline assembly
        }
      }
    }
  },
  networks: {
    hardhat: {
      // forking: {
      //   url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.alchemy_key}`,
      //   blockNumber: 13649106 // Pin to a recent block to go faster
      // },
      // accounts: [{
      //   privateKey: process.env.WALLET_PRIVATE_KEY,
      //   balance: '0'}],
      chainId: 31337,
    },
    // mainnet: {
    //   url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.alchemy_key}`,
    //   // accounts: [process.env.WALLET_PRIVATE_KEY],
    //   // gasPrice: 125000000000
    // },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/n7mkOI7PtADyv0VE7wEBiI6NmxPNBrBY`,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.etherscan_key,
  },
  namedAccounts: {
    deployer: '0xf697Fcd632C037E2365563C05eF452d51eF320b7',
    tokenOwner: '0xf697Fcd632C037E2365563C05eF452d51eF320b7'
  },
  abiExporter: {
    path: './data/abi',
    clear: true,
    flat: true,
    // only: ['Dungeons', 'CharacterCard', 'dungeonsRender', 'dungeonsSeeder', 'dungeonsGenerator', 'IDungeons', 'IDungeonsGenerator', 'IDungeonsRender', 'IDungeonsSeeder'],
    spacing: 2
  }
};
