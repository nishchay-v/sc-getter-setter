const { web3, myAccount } = require('./utils')
const { abi, address } = require('./contractArtifacts')


let contract = new web3.eth.Contract(JSON.parse(abi), address)

// console.log(contract)

async function get() {
    let r = await contract.methods.get().call()
    return r
}

async function set (value) {
    let r = await contract.methods.set(value).send({
        from: myAccount.address,
        gas: 80000
    })

    return r.transactionHash
}


// for interacting with the browser
window.addEventListener('load', () => {
  document.getElementById("get").onclick = () => {
    get().then((r) => {
      document.getElementById("resultOfGet").innerHTML = r
    })
  }
  document.getElementById("set").onclick = () => {
    val = document.getElementById("value").value
    set(val).then((r) => {
      document.getElementById("resultOfSet").innerHTML = r
    })
  }
})