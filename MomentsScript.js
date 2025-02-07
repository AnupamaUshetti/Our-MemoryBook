// Array of photos with their descriptions
const galleryPhotos = [
    {
        imgSrc: '/images/moments/galleface.jpg',
        description: 'Beautiful sunset at the beach'
    },
    {
        imgSrc: '/images/moments/first_royal_event.jpg',
        description: 'Mountain landscape in autumn'
    },
    {
        imgSrc: '/images/moments/selfie_time.jpg',
        description: 'City lights at night'
    },
    {
        imgSrc: '/images/moments/chill_duo.jpg',
        description: 'bla'
    },
    {
      imgSrc: '/images/moments/rio.jpeg',
      description: 'Beautiful sunset at the beach'
    },
    {
        imgSrc: '/images/moments/gal_beach.jpg',
        description: 'Mountain landscape in autumn'
    },
    {
        imgSrc: '/images/moments/bandi_full.jpeg',
        description: 'City lights at night'
    },
    {
        imgSrc: '/images/moments/sleeping _baby.jpeg',
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