


# Blockchain Based Course Credential Platform


This decentralized application allows educational institutions to issue and verify course completion credentials securely on the Ethereum blockchain. Using Hardhat and the Sepolia testnet, the app ensures that student credentials are transparent, tamper-proof, and easily verifiable by third parties, enhancing trust in academic certifications.



## Appendix

Index
- [Features](#Features)
- [Screenshots](#Screenshots)
- [Installation](#installation)
- [Environment Variables](##Environmentalvariables)
- [Run Locally](##RunLocally)



# Features

Decentralized Credential Issuance
Educational institutions can issue course completion certificates directly on the Ethereum blockchain, ensuring transparency and immutability.

## Secure Verification
Third parties (such as employers or other institutions) can verify the authenticity of issued credentials on-chain without the need for intermediaries.

## Tamper-Proof Credentials
Once issued, credentials are securely stored on the blockchain, making them tamper-proof and verifiable at any time.

## Scalable on Sepolia Testnet
The app is deployed on the Ethereum Sepolia testnet for development and testing purposes, ensuring smooth deployment on the Ethereum mainnet.

## User-Friendly Interface
The React.js-based frontend provides a simple and intuitive user experience for both students and institutions.

## Off-Chain Storage for Certificates
Certificates and academic records can be stored off-chain using IPFS, with references on the blockchain, reducing on-chain storage costs while maintaining security.

## Teacher-Student Interaction
Teachers can validate course completion and issue credentials after reviewing students' work.

## Screenshots


![App Screenshot](https://i.postimg.cc/V653tc6j/COURSE5.png)

![App Screenshot](https://i.postimg.cc/FKzPWV4v/COURSE4.png)

![App Screenshot](https://i.postimg.cc/cLc3nhHM/COURSE3.png)

![App Screenshot](https://i.postimg.cc/2SNyTZJc/COURSE2.png)

![App Screenshot](https://i.postimg.cc/bwCgtS2B/COURSE1.png)

![App Screenshot](https://i.postimg.cc/cJXfVhG4/course9.png)

![App Screenshot](https://i.postimg.cc/3W5Ggbm9/course10.png)

![App Screenshot](https://i.postimg.cc/PfBV3XMV/course11.png)

![App Screenshot](https://i.postimg.cc/q7NPhTg2/course8.png)

![App Screenshot](https://i.postimg.cc/fT4RM82H/course7.png)








## Installation

Install my-project with npm

```bash
  npm install
  cd client
  npm install


Metamask Installation
This project utilizes blockchain technology and smart contracts, requiring the installation of Metamask for Ethereum wallet functionality. Follow these steps to set up Metamask:

Install Metamask:
If you haven't already, install Metamask as a browser extension for your preferred browser (Chrome, Firefox, Brave, etc.). You can find Metamask and installation instructions at metamask.io.

Set up Metamask:

Create a new wallet or import an existing one.
Connect Metamask to the Ethereum Mainnet or any other network your project interacts with.
Configure your wallet:

Ensure your wallet is funded with the appropriate Ethereum (ETH) or tokens required for interacting with this application's smart contracts.
Connect Metamask to the application:

Once Metamask is installed and set up, connect it to the application to enable blockchain interactions.
For detailed instructions on using Metamask, refer to the Metamask User Guide.

```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


```bash
API_KEY=ADD_YOUR_API_KEY_HERE
GOERLI_URL=ADD_RPC_URL_HERE
PRIVATE_KEY=ADD_WALLET_PRIVATE_KEY_HERE

```



## Run Locally

Clone the project

```bash
  git clone https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App.git

```

Go to the project directory

```bash
  cd Blockchain-based-Electoral-Bond-Web-App
```

Install dependencies

```bash
  npm install
```

Deploy Smart Contract

```bash
  npx hardhat run --network goerli scripts/finaldeploy.js
```

Copy and paste the deployed contract address in App.js:

```bash
  const contractAddress = "0x0e32839B72AD8589F633F1Ce9ad94d13D1438630";
```
Frontend Installation
Go to the client directory

```bash
cd client
```

Install dependencies
```bash
npm install
```


Start the server
```bash
npm start
```


## Tech Stack

ReactJS,
Ethereum,
Sepolia,
Hardhat


