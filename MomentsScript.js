// Array of photos with their descriptions
const galleryPhotos = [
    {
        imgSrc: '/images/memories/memoriesBackground.jpg',
        description: 'The very first day we went to Galle Face.🌊❤️'
    },
    {
        imgSrc: '/images/memories/memoriesBackground.jpg',
        description: 'Our first Royal event as a couple!💙💛💙 You looked a bit less interested that day. But baba, there are so many more events to enjoy.😉✨'
    },
    {
        imgSrc: '/images/memories/memoriesBackground.jpg',
        description: 'The day after a moment I truly smiled with you.😊❤️'
    },
    {
        imgSrc: '/images/memories/memoriesBackground.jpg',
        description: 'Just us, chilling together.❄️✨'
    },
    {
      imgSrc: '/images/memories/memoriesBackground.jpg',
      description: 'The day we went to Rio. Good vibes, great food, and memories worth keeping.🍧✨'
    },
    {
        imgSrc: '/images/memories/memoriesBackground.jpg',
        description: 'What was that place? But I still got that feeling on that day.✨'
    },
    {
        imgSrc: '/images/memories/memoriesBackground.jpg',
        description: 'Al-Mass biriyani + 2 full Bandi gedies.🍽️😋'
    },
    {
        imgSrc: '/images/memories/memoriesBackground.jpg',
        description: "Awwww... Look who's sleepingggg.💤😴💖"
    },
    {
        imgSrc: '/images/memories/memoriesBackground.jpg',
        description: "Yes, it's Port City. But on that day, it was our own world. How can I forget those feelings and memories? 🏙️💖"
    },
    {
        imgSrc: '/images/memories/memoriesBackground.jpg',
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