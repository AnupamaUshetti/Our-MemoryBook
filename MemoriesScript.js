// Array of photos with their descriptions
const galleryPhotos = [
  {
      imgSrc: '/images/memories/birthday_cards.jpg',
      description: 'Beautiful sunset at the beach'
  },
  {
      imgSrc: '/images/memories/birthday_gift_forHer.jpg',
      description: 'Mountain landscape in autumn'
  },
  {
      imgSrc: '/images/memories/gift_that_make_you_happy.jpg',
      description: 'City lights at night'
  },
  {
      imgSrc: '/images/memories/my_little_pookie.jpeg',
      description: 'bla'
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