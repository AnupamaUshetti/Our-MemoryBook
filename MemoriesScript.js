// Array of photos with their descriptions
const galleryPhotos = [
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Our very first photo together.📸❤️ PC: Janali Jayawardhana'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Our first call. Well, not the actual first, but the first one that truly hit different. Ahhh... A whole hour of us.🥹📞❤️'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Not the exact photo. but that day, before viva. And that forehead kiss... ahhh!🥹💖'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Can you even imagine a 3 hour call? Well, this is it!😌📞❤️'
  },
  {
    imgSrc: '/images/moments/momentsBackground.jpg',
    description: 'Sure my queen👑. This snap makes me feel like a king.🧸❤️'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'You remember me, just as I always remember you.❤️'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Different ice cream, Same you.🍦'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Aaaaneeeee... My little pookieeeee...🥹'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'My inner creative soul made this just for you.🎨❤️'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'This gift carries my whole heart and all my love for you.🎁'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: "Which one's better? No doubt, it's yours!😉❤️"
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Remember, Pinky promises are never broken.🤞💖'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: "I'm sure this gift brought a smile to your face!🎁😊❤️"
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Pissu jooduwa!😜🐇💖'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'A Snap to remeber.📸❤️'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Some little things make me happy.🥹💖'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: "This is more than just a wallpaper, it’s a memory I’ll keep forever.💖🖼️"
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: "Thisssssss! I can remember the exact moment like it’s happening right now.🥹✨💖"
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Pure love brings the greatest satisfaction.💖✨'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Aneeyyyy mage punchiii Araliya maleeee, how can I handle this cuteness?!🥹🌸💖'
  },
  {
      imgSrc: '/images/moments/momentsBackground.jpg',
      description: 'Araliya Mal = You. That’s it. Nothing more, Nothing less.🌼'
  }
];

// Function to add a single photo
function addPhoto(imgSrc, description) {
  const gallery = document.getElementById('gallery');
  
  const photoCard = document.createElement('div');
  photoCard.className = 'photo-card';
  
  photoCard.innerHTML = `
      <div class="photo-card-inner">
          <div class="photo-front">
              <img src="${imgSrc}" alt="Gallery Photo">
          </div>
          <div class="photo-back">
              <p class="description">${description}</p>
          </div>
      </div>
  `;
  
  photoCard.addEventListener('click', () => {
      photoCard.classList.toggle('flipped');
  });
  
  gallery.appendChild(photoCard);
}

// Function to load all photos from the array
function loadGallery() {
  galleryPhotos.forEach(photo => {
      addPhoto(photo.imgSrc, photo.description);
  });
}

// Load the gallery when the page loads
loadGallery();