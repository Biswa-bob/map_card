// const { ContractType } = require('hardhat/internal/hardhat-network/stack-traces/model');
// const { ethers } = require("hardhat");

// const CharacterCardAbi = require('../data/abi/CharacterCard.json');
// // Script to deploy our Character Card

// module.exports = async (hre) => {
//     const ownerAddress = '0xf697Fcd632C037E2365563C05eF452d51eF320b7';

//     const {deployments, getNamedAccounts} = hre;
//     const {deploy} = deployments;
//     const {deployer} = await getNamedAccounts();

//     const signer = await hre.ethers.getSigner(ownerAddress);

//     const CharacterCard = await ethers.getContractFactory("contracts/CharacterCard.sol:CharacterCard", signer);
//     const characterCard = await CharacterCard.connect(signer).deploy();
//     await characterCard.deployed();
//     console.log('Deployment from: ', signer.address);
//     console.log(`Character Card Contract Address: ${characterCard.address}`)
// }
