function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    
    // Random starting position
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Random size between 15px and 40px to match your styling
    const size = Math.random() * 25 + 15;
    heart.style.fontSize = size + 'px';
    
    // Random animation duration between 4s and 8s
    const duration = Math.random() * 4 + 4;
    heart.style.animationDuration = duration + 's';
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create new heart every 200ms (reduced frequency for better performance)
setInterval(createHeart, 200);

function updateCountdown() {
    const startDate = new Date('2024-02-15T00:00:00');
    const now = new Date();
    const difference = now - startDate;

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);