// 1. Generate Floating Hearts Background
const heartsBg = document.getElementById('hearts-bg');
const heartIcons = ['❤️', '💖', '💕', '💗', '💓'];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
    
    heartsBg.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 400);

// 2. "No" Button Dodging Logic
const noBtn = document.getElementById('no-btn');
noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = Math.floor(Math.random() * maxX) + 'px';
    noBtn.style.top = Math.floor(Math.random() * maxY) + 'px';
    noBtn.style.margin = '0';
});

// 3. "Yes" Success Effect (Confetti)
const yesBtn = document.getElementById('yes-btn');
yesBtn.addEventListener('click', () => {
    document.getElementById('question-state').style.display = 'none';
    document.getElementById('success-state').style.display = 'block';
    createConfetti();
});

function createConfetti() {
    for(let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = ['#ff4d6d', '#ff8fa3', '#ffffff'][Math.floor(Math.random()*3)];
        document.body.appendChild(confetti);
        
        // Simple fall animation
        setTimeout(() => {
            confetti.style.transform = `translateY(${window.innerHeight}px) rotate(360deg)`;
            confetti.style.opacity = '0';
        }, 100);
        setTimeout(() => confetti.remove(), 4000);
    }
}
                                                                                                                                                                                                        