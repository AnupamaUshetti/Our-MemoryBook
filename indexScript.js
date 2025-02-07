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