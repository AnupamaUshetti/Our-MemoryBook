// Array of photos with their descriptions
const galleryPhotos = [
    {
        imgSrc: '/images/moments/galleface.jpg',
        description: 'The very first day we went to Galle Face.🌊❤️'
    },
    {
        imgSrc: '/images/moments/first_royal_event.jpg',
        description: 'Our first Royal event as a couple!💙💛💙 You looked a bit less interested that day. But baba, there are so many more events to enjoy.😉✨'
    },
    {
        imgSrc: '/images/moments/selfie_time.jpg',
        description: 'The day after a moment I truly smiled with you.😊❤️'
    },
    {
        imgSrc: '/images/moments/chill_duo.jpg',
        description: 'Just us, chilling together.❄️✨'
    },
    {
      imgSrc: '/images/moments/rio.jpeg',
      description: 'The day we went to Rio. Good vibes, great food, and memories worth keeping.🍧✨'
    },
    {
        imgSrc: '/images/moments/gal_beach.jpg',
        description: 'What was that place? But I still got that feeling on that day.✨'
    },
    {
        imgSrc: '/images/moments/bandi_full.jpeg',
        description: 'Al-Mass biriyani + 2 full Bandi gedies.🍽️😋'
    },
    {
        imgSrc: '/images/moments/sleeping _baby.jpeg',
        description: 'Awwww... Who is that sleeping cutieee?💤😴💖'
    },
    {
        imgSrc: '/images/moments/LostInOurWorld.jpg',
        description: "Yes, it's Port City. But on that day, it was our own world. How can I forget those feelings and memories? 🏙️💖"
    },
    {
        imgSrc: '/images/moments/MaaruDeepnShiok.jpg',
        description: 'A flavorful meal in our own little world.🍽️💫 Maaru deepn Shiok.😅'
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