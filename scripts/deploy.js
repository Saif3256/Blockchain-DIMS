async function main() {
    // We get the signers (accounts) from Hardhat
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    // We get the contract factory for IdentiFi
    const IdentiFi = await ethers.getContractFactory("IdentiFi");
  
    // Deploy the contract
    const contract = await IdentiFi.deploy();
    console.log("IdentiFi contract deployed to:", contract.address);
  }
  
  // To run the script
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  