let userAddress = "";

async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            userAddress = accounts[0];
            localStorage.setItem('dostcoin_address', userAddress);
            document.getElementById("address").textContent = userAddress;
            document.getElementById("walletInfo").classList.remove("hidden");
        } catch (error) {
            alert("⛔️ Доступ до гаманця відхилено");
        }
    } else {
        alert("🦊 Встановіть Metamask!");
    }
}
