require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");

// Read private key from `secrete.txt`
const privateKey = fs.readFileSync("secrete.txt", "utf-8").trim();

// Replace `YOUR_INFURA_PROJECT_ID` with your actual Infura Project ID
const infuraProjectId = "YOUR_INFURA_PROJECT_ID"; 

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/c00df58416a449b49c538d5b854644a8`,
      accounts: ["0x8b8eeb61dd84278673ed9ce3ad2de60226d72894f75dc4e87874f42c5e50053f"], // Private key must be in quotes and securely stored
    },
  },
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true,
};
