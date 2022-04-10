require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

// const projectID = fs.readFileSync(".projectId").toString();
// const prvKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mainnet: {
    //   url: `https://rpc-mainnet.maticvigil.com/v1/${projectID}`,
    //   accounts: [prvKey]
    // },
    // mumbai: {
    //   url: `https://rpc-mumbai.maticvigil.com/v1/0a90c8fad2e706c9b1813e2b5f3bd0c209fbb3f1`,
    //   accounts: 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6
    // }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
