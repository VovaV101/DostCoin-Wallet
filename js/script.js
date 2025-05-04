// Функція для входу в гаманець
function loginWallet() {
    const seed = document.getElementById('seedInput').value.trim();

    if (!seed) {
        alert('Будь ласка, введіть seed-фразу!');
        return;
    }

    // Створюємо фейкову адресу
    const address = "0x" + Math.random().toString(36).substr(2, 10);
    const balance = 1000000; // Початковий баланс

    // Зберігаємо дані в LocalStorage
    localStorage.setItem('address', address);
    localStorage.setItem('balance', balance);

    // Відображаємо дані
    document.getElementById('address').innerText = address;
    document.getElementById('balance').innerText = balance + " DOST";
    document.getElementById('walletInfo').classList.remove('hidden');
}

// Функція для надсилання монет
function sendCoins() {
    alert('Надсилання монет поки що в розробці!');
}
