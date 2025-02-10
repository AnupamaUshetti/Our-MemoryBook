// Array of photos with their descriptions
const galleryPhotos = [
  {
      imgSrc: '/images/memories/first_photo.jpg',
      description: 'Our very first photo together.📸❤️ PC: Janali Jayawardhana'
  },
  {
      imgSrc: '/images/memories/our_first_call.jpeg',
      description: 'Our first call. Well, not the actual first, but the first one that truly hit different. Ahhh... A whole hour of us.🥹📞❤️'
  },
  {
      imgSrc: '/images/memories/viva_kiss.jpg',
      description: 'Not the exact photo. but that day, before viva. And that forehead kiss... ahhh!🥹💖'
  },
  {
      imgSrc: '/images/memories/Call.jpeg',
      description: 'Can you even imagine a 3 hour call? Well, this is it!😌📞❤️'
  },
  {
    imgSrc: '/images/memories/Sure my queen.jpeg',
    description: 'Sure my queen👑. This snap makes me feel like a king.🧸❤️'
  },
  {
      imgSrc: '/images/memories/first_gift_forMe.jpg',
      description: 'You remember me, just as I always remember you.❤️'
  },
  {
      imgSrc: '/images/memories/different_icecream.jpg',
      description: 'Different ice cream, Same you.🍦'
  },
  {
      imgSrc: '/images/memories/my_little_pookie.jpeg',
      description: 'Aaaaneeeee... My little pookieeeee...🥹'
  },
  {
      imgSrc: '/images/memories/happy_birthday_sweetheart.jpg',
      description: 'My inner creative soul made this just for you.🎨❤️'
  },
  {
      imgSrc: '/images/memories/birthday_gift_forHer.jpg',
      description: 'This gift carries my whole heart and all my love for you.🎁'
  },
  {
      imgSrc: '/images/memories/birthday_cards.jpg',
      description: "Which one's better? No doubt, it's yours!😉❤️"
  },
  {
      imgSrc: '/images/memories/pinky_promises.jpg',
      description: 'Remember, Pinky promises are never broken.🤞💖'
  },
  {
      imgSrc: '/images/memories/gift_that_make_you_happy.jpg',
      description: "I'm sure this gift brought a smile to your face!🎁😊❤️"
  },
  {
      imgSrc: '/images/memories/rabbit_head.jpg',
      description: 'Pissu jooduwa!😜🐇💖'
  },
  {
      imgSrc: '/images/memories/snap_to_remember.jpg',
      description: 'A Snap to remeber.📸❤️'
  },
  {
      imgSrc: '/images/memories/little_things_makeMeHappy.jpg',
      description: 'Some little things make me happy.🥹💖'
  },
  {
      imgSrc: '/images/memories/not_just_wallpaper.jpg',
      description: "This is more than just a wallpaper, it’s a memory I’ll keep forever.💖🖼️"
  },
  {
      imgSrc: '/images/memories/flower_girl.jpg',
      description: "Thisssssss! I can remember the exact moment like it’s happening right now.🥹✨💖"
  },
  {
      imgSrc: '/images/memories/great_satisfaction.jpeg',
      description: 'Pure love brings the greatest satisfaction.💖✨'
  },
  {
      imgSrc: '/images/memories/flower_girl_2.0.jpg',
      description: 'Aneeyyyy mage punchiii Araliya maleeee, how can I handle this cuteness?!🥹🌸💖'
  },
  {
      imgSrc: '/images/memories/Araliya_mal.jpg',
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