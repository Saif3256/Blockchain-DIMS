const { ethers } = require("ethers");
const privateKey = "0x8b8eeb61dd84278673ed9ce3ad2de60226d72894f75dc4e87874f42c5e50053f";
const wallet = new ethers.Wallet(privateKey);
console.log("Public Address:", wallet.address);
