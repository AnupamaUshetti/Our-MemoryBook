/*const photos = Array.from({ length: 19 }, (_, i) => ({
    id: 1,
    imageUrl: `/images/memories/great_satisfaction.jpeg`,
    description: `HUTTO.`
}));

const gallery = document.getElementById('photoGallery');

photos.forEach(photo => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    
    card.innerHTML = `
        <div class="photo-inner">
            <div class="photo-front">
                <img src="${photo.imageUrl}" alt="Memory ${photo.id}">
            </div>
            <div class="photo-back">
                <p>${photo.description}</p>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    gallery.appendChild(card);
});*/

// Array of unique descriptions for each photo
const descriptions = [
    "Memory 1: A beautiful sunrise",
    "Memory 2: A day at the beach",
    "Memory 3: A snowy mountain hike",
    "Memory 4: A delightful cityscape",
    "Memory 5: A picnic in the park",
    "Memory 6: A moment of joy",
    "Memory 7: A cozy evening by the fire",
    "Memory 8: A wonderful family reunion",
    "Memory 9: A fun adventure",
    "Memory 10: A magical festival night",
    "Memory 11: A nostalgic holiday",
    "Memory 12: A memorable concert",
    "Memory 13: A serene lake view",
    "Memory 14: A joyful celebration",
    "Memory 15: A lively street scene",
    "Memory 16: A captivating sunset",
    "Memory 17: A moment of inspiration",
    "Memory 18: A charming small town",
    "Memory 19: A treasured memory"
  ];
  
  // Create an array of 19 photo objects
  const photos = Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    imageUrl: `/images/memories/our_first_call${i + 1}.jpeg`, // Ensure your image names match this pattern
    description: descriptions[i]
  }));
  
  const gallery = document.getElementById('photoGallery');
  
  photos.forEach(photo => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    
    card.innerHTML = `
      <div class="photo-inner">
        <div class="photo-front">
          <img src="${photo.imageUrl}" alt="Memory ${photo.id}">
        </div>
        <div class="photo-back">
          <p>${photo.description}</p>
        </div>
      </div>
    `;
  
    // Toggle the "flipped" class on click for a flip effect
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  
    gallery.appendChild(card);
  });
  