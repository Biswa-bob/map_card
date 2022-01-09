// const { ContractType } = require('hardhat/internal/hardhat-network/stack-traces/model');
// const { ethers } = require("hardhat");
//
// // const CharacterCardAbi = require('../data/abi/CharacterCard.json');
//
// // Script to deploy our contract
//
// const characterCardAddress = '0xad02AFa5cce511B58536DF98c31c0c5e7C998DFF';    // Rinkeby CharacterCard address
// //const characterCardAddress = '0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7';   // Mainnet address
//
// module.exports = async (hre) => {
//     const ownerAddress = '0xf697Fcd632C037E2365563C05eF452d51eF320b7';
//
//     const signer = await hre.ethers.getSigner(ownerAddress);
//
//     console.log(`Loot Address: ${lootAddress}`);
//
//     // const Render = await ethers.getContractFactory("dungeonsRender", signer);
//     // const render = await Render.connect(signer).deploy();
//     // await render.deployed();
//     let render = {};
//     render.address = '0x4277697f5A222c37cf6d998C6D284396554fb348';
//     console.log(`Render Address: ${render.address}`)
//
//     let generator = {};
//     generator.address = '0xacf693421Cec6C60A87a9c4575447F92Cd731484';
//     console.log(`Generator Address: ${generator.address}`)
//
//     let seeder = {};
//     seeder.address = '0x63b5C39dE499Fae393a9Cb7780C6dA6Cfa10EB28';
//     console.log(`Seeder Address: ${seeder.address}`)
//
//     try {
//
//         // console.log('Generator Factory');
//         // const Generator = await ethers.getContractFactory("dungeonsGenerator", signer);
//         // console.log('Generator Deploy starting');
//         // const generator = await Generator.connect(signer).deploy();
//         // console.log('Generator Deploy ended');
//         // await generator.deployed();
//         // console.log(`Generator Address: ${generator.address}`)
//         //
//         // console.log('Seeder Factory')
//         // const Seeder = await ethers.getContractFactory("dungeonsSeeder", signer);
//         // console.log('Seeder Deploy starting')
//         // const seeder = await Seeder.connect(signer).deploy();
//         // console.log('Seeder Deploy ended')
//         // await seeder.deployed();
//         // console.log(`Seeder Address: ${seeder.address}`)
//
//         console.log('Dungeons Factory')
//         const Dungeons = await ethers.getContractFactory("Dungeons", signer);
//         console.log('Dungeons Deploy starting')
//         const dungeons = await Dungeons.connect(signer).deploy(lootAddress, render.address, generator.address, seeder.address);
//         console.log('Dungeons Deploy ended')
//         await dungeons.deployed();
//
//         console.log('Deployment from: ', signer.address);
//         console.log(`Dungeons Contract Address: ${dungeons.address}`)
//     } catch (err) {
//         console.log(err);
//     }
//
// }
