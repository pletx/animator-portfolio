let currentIndexes = { 'image-carousel-1': 0, 'image-carousel-2': 0, 'image-carousel-3': 0 }; // Ajout de l'index pour le troisième carousel

function loadCarouselImages() {
    const carousels = {
        'image-carousel-3': [
            './assets/decor flipbook/タイムライン1_0000.jpg',
            './assets/decor flipbook/タイムライン1_0000.jpg',
            './assets/decor flipbook/タイムライン1_0003.jpg',
            './assets/decor flipbook/タイムライン1_0003.jpg',
            './assets/decor flipbook/タイムライン1_0007.jpg',
            './assets/decor flipbook/タイムライン1_0007.jpg',
            './assets/decor flipbook/タイムライン1_0012.jpg',
            './assets/decor flipbook/タイムライン1_0012.jpg',
            './assets/decor flipbook/タイムライン1_0016.jpg',
            './assets/decor flipbook/タイムライン1_0016.jpg',
            './assets/decor flipbook/タイムライン1_0021.jpg',
            './assets/decor flipbook/タイムライン1_0021.jpg',
            './assets/decor flipbook/タイムライン1_0023.jpg',
            './assets/decor flipbook/タイムライン1_0023.jpg',
            './assets/decor flipbook/タイムライン1_0025.jpg',
            './assets/decor flipbook/タイムライン1_0025.jpg',
        ],
        'image-carousel-1': [
           
            './assets/Run flipbook/Run_0000.jpg',
            ,'./assets/Run flipbook/Run_0001.jpg',
            './assets/Run flipbook/Run_0002.jpg',
            './assets/Run flipbook/Run_0003.jpg',
            './assets/Run flipbook/Run_0004.jpg',
             './assets/Run flipbook/Run_0005.jpg',
            './assets/Run flipbook/Run_0006.jpg',
            './assets/Run flipbook/Run_0007.jpg',
            './assets/Run flipbook/Run_0008.jpg',
            './assets/Run flipbook/Run_0009.jpg',
            './assets/Run flipbook/Run_0010.jpg',
            './assets/Run flipbook/Run_0011.jpg',
            ],
            
            
            'image-carousel-2': [
            './assets/Rika flipbook/Rika_0000.jpg',
            './assets/Rika flipbook/Rika_0001.jpg',
            './assets/Rika flipbook/Rika_0002.jpg',
            './assets/Rika flipbook/Rika_0003.jpg',
            './assets/Rika flipbook/Rika_0004.jpg',
            './assets/Rika flipbook/Rika_0005.jpg',
            './assets/Rika flipbook/Rika_0006.jpg',
            './assets/Rika flipbook/Rika_0007.jpg',
            './assets/Rika flipbook/Rika_0008.jpg',
            './assets/Rika flipbook/Rika_0009.jpg',
            './assets/Rika flipbook/Rika_0010.jpg',
            './assets/Rika flipbook/Rika_0011.jpg',
            './assets/Rika flipbook/Rika_0012.jpg',
            './assets/Rika flipbook/Rika_0013.jpg',
            './assets/Rika flipbook/Rika_0014.jpg',
            './assets/Rika flipbook/Rika_0015.jpg',
            './assets/Rika flipbook/Rika_0016.jpg',
            './assets/Rika flipbook/Rika_0017.jpg',
            './assets/Rika flipbook/Rika_0018.jpg',
            './assets/Rika flipbook/Rika_0019.jpg',
            './assets/Rika flipbook/Rika_0020.jpg',
            './assets/Rika flipbook/Rika_0021.jpg',
            './assets/Rika flipbook/Rika_0022.jpg',
            './assets/Rika flipbook/Rika_0023.jpg',
            './assets/Rika flipbook/Rika_0024.jpg',
            './assets/Rika flipbook/Rika_0025.jpg',
            './assets/Rika flipbook/Rika_0026.jpg',
            './assets/Rika flipbook/Rika_0027.jpg',
            './assets/Rika flipbook/Rika_0028.jpg','./assets/Rika flipbook/Rika_0029.jpg',
            './assets/Rika flipbook/Rika_0030.jpg',
            './assets/Rika flipbook/Rika_0031.jpg',
            './assets/Rika flipbook/Rika_0032.jpg',
            './assets/Rika flipbook/Rika_0033.jpg',
            './assets/Rika flipbook/Rika_0034.jpg',
            './assets/Rika flipbook/Rika_0035.jpg',
            './assets/Rika flipbook/Rika_0036.jpg',
            './assets/Rika flipbook/Rika_0037.jpg',
            './assets/Rika flipbook/Rika_0038.jpg',
            './assets/Rika flipbook/Rika_0039.jpg',
            './assets/Rika flipbook/Rika_0040.jpg',
            './assets/Rika flipbook/Rika_0041.jpg',
            './assets/Rika flipbook/Rika_0042.jpg',
            './assets/Rika flipbook/Rika_0043.jpg',
            './assets/Rika flipbook/Rika_0044.jpg','./assets/Rika flipbook/Rika_0045.jpg',
            './assets/Rika flipbook/Rika_0046.jpg',
            './assets/Rika flipbook/Rika_0047.jpg',
            './assets/Rika flipbook/Rika_0048.jpg',
            './assets/Rika flipbook/Rika_0049.jpg',
            './assets/Rika flipbook/Rika_0050.jpg',
            './assets/Rika flipbook/Rika_0051.jpg',
            './assets/Rika flipbook/Rika_0052.jpg',
            './assets/Rika flipbook/Rika_0053.jpg',
            './assets/Rika flipbook/Rika_0054.jpg',
            './assets/Rika flipbook/Rika_0055.jpg',
            './assets/Rika flipbook/Rika_0056.jpg',
            './assets/Rika flipbook/Rika_0057.jpg',
            './assets/Rika flipbook/Rika_0058.jpg',
            './assets/Rika flipbook/Rika_0059.jpg',
        ]
    };

    for (const [carouselId, images] of Object.entries(carousels)) {
        const carousel = document.getElementById(carouselId);

        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Carousel Image ${index + 1}`;
            img.style.display = index === 0 ? 'block' : 'none'; // Affiche uniquement la première image
            carousel.appendChild(img);
        });
    }
}

function moveCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('img');
    const currentIndex = currentIndexes[carouselId];

    // Masquer l'image actuelle
    images[currentIndex].style.display = 'none';

    // Mettre à jour l'index
    currentIndexes[carouselId] += direction;

    // Boucler si on dépasse les limites
    if (currentIndexes[carouselId] < 0) {
        currentIndexes[carouselId] = images.length - 1;
    } else if (currentIndexes[carouselId] >= images.length) {
        currentIndexes[carouselId] = 0;
    }

    // Afficher la nouvelle image
    images[currentIndexes[carouselId]].style.display = 'block';
}

// Charger les images au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    loadCarouselImages();

    document.querySelectorAll('.left-arrow').forEach(arrow => {
        arrow.addEventListener('click', () => {
            const carouselId = arrow.parentElement.querySelector('.carousel').id;
            moveCarousel(carouselId, -1);
        });
    });

    document.querySelectorAll('.right-arrow').forEach(arrow => {
        arrow.addEventListener('click', () => {
            const carouselId = arrow.parentElement.querySelector('.carousel').id;
            moveCarousel(carouselId, 1);
        });
    });

    // Gestion du modal pour les GIFs
    const modal = document.getElementById('gif-modal');
    const modalImg = document.getElementById('gif-fullscreen');

    // Ouvrir le modal au clic sur un GIF
    document.querySelectorAll('.gif-container img').forEach(gif => {
        gif.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = gif.src;
        });
    });

    // Fermer le modal au clic sur le bouton de fermeture ou en dehors de l'image
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.classList.contains('close')) {
            modal.style.display = 'none';
        }
    });

    // Gestion du modal pour le formulaire de contact
    const mailModal = document.getElementById('mail-modal');
    const openModalButton = document.getElementById('open-modal');
    const closeModalButton = mailModal.querySelector('.close');

    // Ouvrir le modal
    openModalButton.addEventListener('click', () => {
        mailModal.style.display = 'block';
    });

    // Fermer le modal
    closeModalButton.addEventListener('click', () => {
        mailModal.style.display = 'none';
    });

    // Fermer le modal en cliquant en dehors du contenu
    window.addEventListener('click', (event) => {
        if (event.target === mailModal) {
            mailModal.style.display = 'none';
        }
    });

    // Gestion du formulaire (optionnel, pour envoyer les données)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Your message has been sent!');
        mailModal.style.display = 'none';
    });
});