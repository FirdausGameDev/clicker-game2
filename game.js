let score = 0;
let clickValue = 1;
let upgradeCost = 100;

const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const upgradeButton = document.getElementById('upgrade');

clickButton.addEventListener('click', () => {
    score += clickValue;
    scoreDisplay.textContent = `Очки: ${score}`;
});

upgradeButton.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickValue *= 2; // Удваиваем количество очков за клик
        upgradeCost *= 2; // Увеличиваем стоимость улучшения
        scoreDisplay.textContent = `Очки: ${score}`;
        upgradeButton.textContent = `Купить улучшение (${upgradeCost} очков)`;
    } else {
        alert('Недостаточно очков для улучшения!');
    }
});
