# Pehchan-Kon | Web 3 Digital Identity Dapp

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

![Screenshot 2024-07-21 at 9 39 54 PM](https://github.com/user-attachments/assets/99b6bbfc-2911-42ec-bbe9-8732227aaa30)

## Introduction
In the current digital landscape, managing and verifying identities across different platforms is often fragmented and insecure. **Pehchan-Kon** aims to revolutionize digital identity management by leveraging the power of blockchain technology to create a unified, secure, and verifiable digital identity solution. This project empowers users to seamlessly manage their identities, ensuring both security and privacy.

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

## Tech Stack
- **Frontend**: Next.js, TypeScript
- **Smart Contracts**: Solidity, Hardhat
- **Blockchain Integrations**: Chainlink VRF
- **Storage**: IPFS

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

## Features
- **Decentralized Identifiers (DIDs)**: Create and manage unique DIDs on the blockchain.
- **Identity Verification**: Submit identity documents for verification by trusted third parties.
- **Credential Verification**: Verify the authenticity of credentials.
- **User Profile Management**: Update personal details and manage credentials easily.
- **Privacy Controls**: Control who can access identity information and under what circumstances.
- **Security Measures**: Implement strong security measures including encryption and secure key management.
- **Social Media Integration**: Share your verified digital identity on various social media platforms.
- **Profile Editing**: Easily update and manage your digital identity profile.

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

## Quick Start
Follow these steps to set up the project locally on your machine.

### Prerequisites
Ensure you have the following installed on your machine:
- Git
- Node.js
- npm
- Hardhat
- Metamask (or any other Ethereum wallet)
- Chainlink VRF setup
- IPFS setup

### Cloning the Repository
```bash
git clone https://github.com/themihirmathur/Pehchan-Kon.git
cd Pehchan-Kon
```

### Installation
Install the project dependencies using npm:
```bash
npm install
```

### Compile the Contracts
```bash
npx hardhat compile
```

### Deploy the Contracts
Replace `yourNetwork` with the desired network configuration:
```bash
npx hardhat run scripts/deploy.js --network yourNetwork
```

### Run the Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

## Smart Contract Overview
The main contract, `IdentiFi`, manages user profiles, DIDs, and credentials.

### Key Functions
- **createUser**: Creates a new user profile and requests a new DID using Chainlink VRF.
- **editUser**: Edits an existing user profile.
- **getUserByUsername**: Retrieves user information by username.
- **getUserByAddress**: Retrieves user information by address.
- **addJob**: Adds a job to the user's profile.
- **getJobs**: Retrieves jobs associated with a user.
- **setVisibility**: Sets visibility preferences for user profile information.
- **getVisibility**: Gets visibility preferences for user profile information.
- **batchCreateUsers**: Batch creates multiple user profiles using Monobean.

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

## Storing Images on IPFS
User images are uploaded and stored on IPFS, ensuring decentralized storage which enhances security and accessibility.

![Screenshot 2024-07-21 at 9 40 06 PM](https://github.com/user-attachments/assets/1bf81d37-0c45-4b4f-a26d-71eea5832297)

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>

## Contributing
We welcome contributions to **Pehchan-Kon**! To contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

---

Feel free to modify and expand this README to suit the specific needs and updates of your project.

<p align="left">
  <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" 
</p>
