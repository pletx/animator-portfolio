// Données des images
const carouselsData = {
    'image-carousel-1': Array.from({length: 12}, (_, i) => `./assets/Run flipbook/Run_${i.toString().padStart(4, '0')}.jpg`),
    'image-carousel-2': Array.from({length: 60}, (_, i) => `./assets/Rika flipbook/Rika_${i.toString().padStart(4, '0')}.jpg`),
    'image-carousel-3': [
        './assets/decor flipbook/タイムライン1_0000.jpg',
        './assets/decor flipbook/タイムライン1_0003.jpg',
        './assets/decor flipbook/タイムライン1_0007.jpg',
        './assets/decor flipbook/タイムライン1_0012.jpg',
        './assets/decor flipbook/タイムライン1_0016.jpg',
        './assets/decor flipbook/タイムライン1_0021.jpg'
    ]
};

let currentIndexes = { 'image-carousel-1': 0, 'image-carousel-2': 0, 'image-carousel-3': 0 };

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // 1. Charger les images
    for (const [id, images] of Object.entries(carouselsData)) {
        const container = document.getElementById(id);
        if (!container) continue;
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            if (index === 0) img.style.display = 'block';
            container.appendChild(img);
        });
    }

    // 2. Gestion du Modal (GIFs)
    const modal = document.getElementById("gif-modal");
    const modalImg = document.getElementById("gif-fullscreen");
    
    document.querySelectorAll('.gif-item').forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = "flex";
            modalImg.src = item.querySelector("img").src;
            document.body.style.overflow = "hidden";
        });
    });

    // 3. Fermeture Modal
    modal.addEventListener('click', (e) => {
        if (e.target !== modalImg) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});

// Fonction de navigation Flipbook
function moveCarousel(id, direction) {
    const images = document.getElementById(id).querySelectorAll('img');
    images[currentIndexes[id]].style.display = 'none';
    currentIndexes[id] = (currentIndexes[id] + direction + images.length) % images.length;
    images[currentIndexes[id]].style.display = 'block';
}