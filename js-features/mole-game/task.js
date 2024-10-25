let score = 0; 
let missed = 0; 
const totalMoles = 10; 
const totalMisses = 5; 
let moleTimer; 

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function showMole() {
    const previousMole = document.querySelector('.hole_has-mole');
    if (previousMole) {
        previousMole.classList.remove('hole_has-mole');
    }

    const randomIndex = Math.floor(Math.random() * 9) + 1;
    const moleHole = getHole(randomIndex);
    moleHole.classList.add('hole_has-mole');
    moleTimer = setTimeout(() => {
        moleHole.classList.remove('hole_has-mole');
        missed++;
        console.log(`Промах! Текущий счет поражений: ${missed}`);
        if (missed === totalMisses) {
            alert('Игра окончена! Вы проиграли.');
            resetGame();
        } else {
            showMole(); 
        }
    }, 1000); 
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            score++;
            console.log(`Попадание! Текущий счет: ${score}`);
            if (score === totalMoles) {
                alert('Поздравляем! Вы победили!');
                resetGame();
            }
        } else {
            missed++;
            console.log(`Промах! Текущий счет поражений: ${missed}`);
            if (missed === totalMisses) {
                alert('Игра окончена! Вы проиграли.');
                resetGame();
            }
        }
        clearTimeout(moleTimer); 
        showMole(); 
    });
}

function resetGame() {
    score = 0;
    missed = 0;
    console.log('Игра сброшена. Начинаем заново!');
    showMole(); 
}

showMole();

