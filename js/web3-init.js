let userAddress = "";
const tokenAddress = "0x4F91d1aE9b70E1431570Ff72f72cBE71D3E9b32e";
const tokenAbi = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
];

// Підключення Metamask
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      userAddress = accounts[0];
      localStorage.setItem('dostcoin_address', userAddress);
      document.getElementById("address").textContent = userAddress;
      document.getElementById("walletInfo").classList.remove("hidden");
      await getDostBalance();
    } catch (error) {
      alert("⛔️ Доступ до гаманця відхилено");
    }
  } else {
    alert("🦊 Встановіть Metamask!");
  }
}

// Отримання балансу токена DOST
async function getDostBalance() {
  if (typeof window.ethereum !== 'undefined') {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
    const balance = await contract.methods.balanceOf(userAddress).call();
    const formatted = web3.utils.fromWei(balance, 'ether');
    document.getElementById("balance").textContent = formatted + " DOST";
  }
}
