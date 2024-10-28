let dead = 0;
let lost = 0;
const totalMoles = 10;
const totalMisses = 5;

const deadDisplay = document.getElementById('dead');
const lostDisplay = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            dead++;
            deadDisplay.textContent = dead; 
            console.log(`Попадание! Текущий счет: ${dead}`);
            if (dead === totalMoles) {
                alert('Поздравляем! Вы победили!');
                resetGame();
            }
        } else {
            lost++;
            lostDisplay.textContent = lost;
            console.log(`Промах! Текущий счет поражений: ${lost}`);
            if (lost === totalMisses) {
                alert('Игра окончена! Вы проиграли.');
                resetGame();
            }
        }
    });
}

function resetGame() {
    dead = 0;
    lost = 0;
    deadDisplay.textContent = dead; 
    lostDisplay.textContent = lost; 
    console.log('Игра сброшена. Начинаем заново!');
}
.