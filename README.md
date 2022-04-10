# Satyapan
"> Satyam Pramanpatram"

## Initialization

### Clone the repo.

```
git clone https://github.com/${GitHub Username}/Styaapan.git
```

Example => `git clone https://github.com/PaLangCODE/Styaapan.git`

<br>

### Open Terminal on the Folder

```
cd Styaapan
```

<br>

<br>

### Go the the `client` folder

```
cd client
```

<br>

### Install the Dependencies by the following commands

```
npm install
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

<br>

### Now move to the `CONTRACT` directory

```
cd ..
cd CONTRACT
```

<br>

### Again Install the Required Dependencies

```
npm install
```

<br>

## IMP

> Create a file in `CONTRACT` folder named as `.projectId` 

This will keep the projectID which we'll get from the RPC provider sites for deployement in polygon testnet.

> Paste the Project ID in it.

### Accessing the test ETH wallets from hardhat

> Get a Test Wallet by the following command

```
npx hardhat node
```

> Copy any Private Key from a specific wallet.

> Open a New Terminal at `Styaapan`

> Create a file in `CONTRACT` folder named as `.secret`

> Paste the Test Wallet `Private Address` in it.

> SetUp the Metamask Test Wallet with the same private address.

> Import the account from the wallet private address.

<br>

<hr>

# RUNNING FILE ON LOCALHOST:

Switch to CONTRACT Directory

```
cd CONTRACT
```

Run The Nodes
```
npx hardhat node
```
The nodes will start running, now we'll have to switch to a new terminal window

## Open a new Terminal on `CONTRACT` Directory

Deploy the `Contracts` on the LocalHost
```
npx hardhat run scripts/deploy.js --network localhost
```

## Copy the `NFT CONTRACT ADDRESS` and the `NFT TRANSFER ADDRESS`, and paste them in the CONTRACT/config.js


### Uncomment the LocalHost provider in client/pages/index.js
```
 const provider = new ethers.providers.JsonRpcProvider();
 ```
 
 ### Copy the NFT.json file from
 
 ```
 CONTRACT/artifacts/contracts/NFT.sol/NFT.json
 ```
 ### and replace it with the
 ```
 client/abi/NFT.json
 ```
 ### Copy the NFTTransfer.json file from
 ```
 client/abi/NFTTransfer.json
 ```
 
 ### Set the Metamask Network to LocalHost
 
 ### Run the UI
 ```
 npm run dev
 ```
 <hr>
 
 # To Run On Polygon Mumbai Testnet
 
 ### Get the Polygon Mumbai Testnet RPC URL from some providers like: Infura, MaticVigil, Alchemy, etc.
 
 Copy the Project Id from the RPC URL Provider and paste it in CONTRACT/hardhat.config.js
 ```
 mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectID}`,
      accounts: [prvKey]
    }
 ```
 
 ### Paste the RPC URL in the CONTRACT/config.js
 
```
export const rpc_url = `rpcUrl`;
```

### Get a wallet where you have Mumbai Testnet Tokens for deployment.
Get some matic tokens by requesting some `Matic/Polygon Faucet` sites. e.g. ```https://faucet.polygon.technology/```

### Paste the Wallet Private Key into the CONTRACT/hardhat.config.js

```
const prvKey = 'privateKey'
```
### Deploy the Contract on the Polygon Mumbai Testnet
Make sure terminal is under `Contract` folder
```
npx hardhat run scripts/deploy.js --network mumbai
```

### Copy the NFT CONTRACT ADDRESS and the NFT TRANSFER ADDRESS, and paste them in the CONTRACT/config.js

### Open New Terminal on the client folder.

### Uncomment the Mumbai Testnet provider
```
For the Mumbai Testnet
const provider = new ethers.providers.JsonRpcProvider(rpc_url);
```

### Copy the NFT.json from
```
CONTRACT/artifacts/contracts/NFT.sol/NFT.json
```

and replace it with the
```
client/abi/NFT.json
```
### Copy the NFTTransfer.json from
```
CONTRACT/artifacts/contracts/NFTTransfer.sol/NFTTransfer.json
```
and replace it with the
```
client/abi/NFTTransfer.json
```
## Add the necessary details and RPC URL related to the polygon mumbai network in the metamask.

## Finally Run the UI
```
npm run dev
```
