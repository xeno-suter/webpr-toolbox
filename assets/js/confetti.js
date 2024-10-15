const createdConfettiPerMove = 6;

document.addEventListener('mousemove', (event) => {
    const createConfetti = (x, y) => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;

        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;

        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        const duration = Math.random() * 2 + 1;
        confetti.style.animationDuration = `${duration}s`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }

    for (let i = 0; i < createdConfettiPerMove; i++) {
        createConfetti(event.clientX, event.clientY);
    }
});