// Array of photos with their descriptions
const galleryPhotos = [
  {
      imgSrc: '/images/memories/first_photo.jpg',
      description: 'Beautiful sunset at the beach'
  },
  {
      imgSrc: '/images/memories/our_first_call.jpeg',
      description: 'Mountain landscape in autumn'
  },
  {
      imgSrc: '/images/memories/viva_kiss.jpg',
      description: 'City lights at night'
  },
  {
      imgSrc: '/images/memories/video_calls.jpg',
      description: 'bla'
  },
  {
    imgSrc: '/images/memories/Sure my queen.jpg',
    description: 'Beautiful sunset at the beach'
  },
  {
      imgSrc: '/images/memories/first_gift_forMe.jpg',
      description: 'Mountain landscape in autumn'
  },
  {
      imgSrc: '/images/memories/different_icecream.jpg',
      description: 'City lights at night'
  },
  {
      imgSrc: '/images/memories/my_little_pookie.jpeg',
      description: 'bla'
  },
  {
      imgSrc: '/images/memories/happy_birthday_sweetheart.jpg',
      description: 'Beautiful sunset at the beach'
  },
  {
      imgSrc: '/images/memories/birthday_gift_forHer.jpg',
      description: 'Mountain landscape in autumn'
  },
  {
      imgSrc: '/images/memories/birthday_cards.jpg',
      description: 'City lights at night'
  },
  {
      imgSrc: '/images/memories/pinky_promises.jpg',
      description: 'bla'
  },
  {
      imgSrc: '/images/memories/gift_that_make_you_happy.jpg',
      description: 'Beautiful sunset at the beach'
  },
  {
      imgSrc: '/images/memories/rabbit_head.jpg',
      description: 'Mountain landscape in autumn'
  },
  {
      imgSrc: '/images/memories/snap_to_remember.jpg',
      description: 'City lights at night'
  },
  {
      imgSrc: '/images/memories/little_things_makeMeHappy.jpg',
      description: 'bla'
  },
  {
      imgSrc: '/images/memories/not_just_wallpaper.jpg',
      description: 'Beautiful sunset at the beach'
  },
  {
      imgSrc: '/images/memories/flower_girl.jpg',
      description: 'Mountain landscape in autumn'
  },
  {
      imgSrc: '/images/memories/great_satisfaction.jpeg',
      description: 'City lights at night'
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