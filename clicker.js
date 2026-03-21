document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.querySelector('.user-balance');
    const avatarElement = document.querySelector('.avatar');
    
    // Загружаем баланс из памяти браузера (или ставим 0, если его нет)
    let currentBalance = parseFloat(localStorage.getItem('balance')) || 0.00;
    
    // Функция обновления текста на экране
    function updateDisplay() {
        balanceElement.textContent = currentBalance.toFixed(2) + '$';
        localStorage.setItem('balance', currentBalance); // Сохраняем
    }

    // Первоначальное отображение
    updateDisplay();

    // Функция самого клика (с эффектами)
    function doClick() {
        currentBalance += 0.01; // Цена клика
        updateDisplay();

        // Эффект для баланса
        balanceElement.style.color = '#fff';
        balanceElement.style.textShadow = '0 0 10px #67c1f5';
        balanceElement.style.transform = 'scale(1.1)';
        setTimeout(() => { balanceElement.style.transform = 'scale(1)'; }, 100);
    }

    // Вешаем клик и на баланс, и на аватарку
    if (balanceElement) balanceElement.addEventListener('click', doClick);
    if (avatarElement) avatarElement.addEventListener('click', doClick);
});