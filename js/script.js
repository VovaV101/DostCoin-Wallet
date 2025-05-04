function loginWallet() {
    const seed = document.getElementById('seedInput').value.trim();
    if (!seed) {
        alert('Будь ласка, введіть seed-фразу!');
        return;
    }

    // Генеруємо фейкову адресу
    const address = "0x" + Math.random().toString(36).substring(2, 15);

    // Виводимо адресу і фейковий баланс
    document.getElementById('address').textContent = address;
    document.getElementById('balance').textContent = "1,000,000 DOST (тестовий)";
    document.getElementById('walletInfo').classList.remove('hidden');
}

function sendCoins() {
    alert('Функція надсилання монет у тестовій версії поки що недоступна.');
}
