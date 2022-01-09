/* Build - outputs a svg of our build */
const hre = require("hardhat");
const ethers = hre.ethers;

const account = '0xf697Fcd632C037E2365563C05eF452d51eF320b7'; // Plug your metmask account in here
const price = 0.05;  // Send 0.05


async function main() {
    /* Deploy Character Card*/
    const CharacterCard = await ethers.getContractFactory("contracts/CharacterCard.sol:CharacterCard");
    const characterCard = await CharacterCard.deploy();
    await characterCard.deployed();
    console.log(`Character Card Contract Address: ${characterCard.address}`)

    // Impersonate user and fund wallet
    await network.provider.request({
        method: "hardhat_impersonateAccount",
        params: ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'],  // test account
    });
    const signer = await ethers.getSigner(account)

    /* Deploy everything else */
    const Render = await ethers.getContractFactory("dungeonsRender");
    const render = await Render.deploy();

    const Generator = await ethers.getContractFactory("dungeonsGenerator");
    const generator = await Generator.deploy();

    const Seeder = await ethers.getContractFactory("dungeonsSeeder");
    const seeder = await Seeder.deploy();

    const Dungeons = await ethers.getContractFactory("Dungeons");
    const dungeons = await Dungeons.deploy(characterCard.address, render.address, generator.address, seeder.address);
    await dungeons.deployed();

    // Impersonate user and fund wallet
    const ethToSend = ethers.utils.parseEther(price.toString());

    console.log('Dungeons Contract Address: ' + dungeons.address);

    let amount = 1000  // How many loot to claim
    for(let i=1; i < amount; i++) {
        const mint = await characterCard.connect(signer).claim(i);
    }

    amount = 10 // How many loot to claim
    for(let i=1; i < amount; i++) {
      await dungeons.connect(signer).claim(i, {value: ethToSend});
      console.log(`${await dungeons.getName(i)} (${i})`);
    }





}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
