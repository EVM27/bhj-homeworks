function startRotator(rotator) {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    function changeText() {
        cases[currentIndex].classList.remove('rotator__case_active');
        currentIndex = (currentIndex + 1) % cases.length;
        const nextCase = cases[currentIndex];
        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = nextCase.dataset.color;

        setTimeout(changeText, nextCase.dataset.speed || 1000);
    }

    setTimeout(changeText, cases[currentIndex].dataset.speed || 1000);
}

document.querySelectorAll('.rotator').forEach(rotator => startRotator(rotator));