const {
  ContractType,
} = require("hardhat/internal/hardhat-network/stack-traces/model");
const { ethers } = require("hardhat");

const CharacterCardAbi = require("../data/abi/CharacterCard.json");

// Script to deploy our contract

const characterCardAddress = "0xf895c9F144EAF83bA57B292d78dd2105d9a58406"; // Rinkeby CharacterCard address
//const characterCardAddress = '0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7';   // Mainnet address

module.exports = async (hre) => {
  const ownerAddress = "0xf697Fcd632C037E2365563C05eF452d51eF320b7";

  const signer = await hre.ethers.getSigner(ownerAddress);

  console.log(`Loot Address: ${characterCardAddress}`);

  // const Render = await ethers.getContractFactory("dungeonsRender", signer);
  // const render = await Render.connect(signer).deploy();
  // await render.deployed();
  let render = {};
  render.address = "0xe7e0c11ab105fe7Db071192cC58D5Fd4Df5aB563";
  console.log(`Render Address: ${render.address}`);

  let generator = {};
  generator.address = "0x4BE4c8cf02890b346e5037DCA9465Dd0853608d8";
  console.log(`Generator Address: ${generator.address}`);

  let seeder = {};
  seeder.address = "0x056b3bb82569Ad88dc13C4614ABaE414CC999A76";
  console.log(`Seeder Address: ${seeder.address}`);

  try {
    // console.log("Generator Factory");
    // const Generator = await ethers.getContractFactory(
    //   "dungeonsGenerator",
    //   signer
    // );
    // console.log("Generator Deploy starting");
    // const generator = await Generator.connect(signer).deploy();
    // console.log("Generator Deploy ended");
    // await generator.deployed();
    // console.log(`Generator Address: ${generator.address}`);

    // console.log("Seeder Factory");
    // const Seeder = await ethers.getContractFactory("dungeonsSeeder", signer);
    // console.log("Seeder Deploy starting");
    // const seeder = await Seeder.connect(signer).deploy();
    // console.log("Seeder Deploy ended");
    // await seeder.deployed();
    // console.log(`Seeder Address: ${seeder.address}`);

    console.log("Dungeons Factory");
    const Dungeons = await ethers.getContractFactory("Dungeons", signer);
    console.log("Dungeons Deploy starting");
    const dungeons = await Dungeons.connect(signer).deploy(
      characterCardAddress,
      render.address,
      generator.address,
      seeder.address
    );
    console.log("Dungeons Deploy ended");
    await dungeons.deployed();

    console.log("Deployment from: ", signer.address);
    console.log(`Dungeons Contract Address: ${dungeons.address}`);
  } catch (err) {
    console.log(err);
  }
};
