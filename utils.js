const Web3 = require('Web3');

const web3 = new Web3('http://localhost:8545')

const privateKey = '0x6a6703325c18eab8beaca7ff94f5970f6fcbb19c16649b538d3b86bfcf1f5ffe'
const myAccount = web3.eth.accounts.wallet.add(privateKey)

// console.log(myAccount)

module.exports = {
    web3: web3,
    myAccount: myAccount
}