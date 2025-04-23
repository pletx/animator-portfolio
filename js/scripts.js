let currentIndexes = { 'image-carousel-1': 0, 'image-carousel-2': 0, 'image-carousel-3': 0 }; // Ajout de l'index pour le troisième carousel

function loadCarouselImages() {
    const carousels = {
        'image-carousel-1': [
            '/assets/decor flipbook/タイムライン1_0000.jpg',
            '/assets/decor flipbook/タイムライン1_0000.jpg',
            '/assets/decor flipbook/タイムライン1_0003.jpg',
            '/assets/decor flipbook/タイムライン1_0003.jpg',
            '/assets/decor flipbook/タイムライン1_0007.jpg',
            '/assets/decor flipbook/タイムライン1_0007.jpg',
            '/assets/decor flipbook/タイムライン1_0012.jpg',
            '/assets/decor flipbook/タイムライン1_0012.jpg',
            '/assets/decor flipbook/タイムライン1_0016.jpg',
            '/assets/decor flipbook/タイムライン1_0016.jpg',
            '/assets/decor flipbook/タイムライン1_0021.jpg',
            '/assets/decor flipbook/タイムライン1_0021.jpg',
            '/assets/decor flipbook/タイムライン1_0023.jpg',
            '/assets/decor flipbook/タイムライン1_0023.jpg',
            '/assets/decor flipbook/タイムライン1_0025.jpg',
            '/assets/decor flipbook/タイムライン1_0025.jpg',
        ],
        'image-carousel-2': [
           
            '/assets/lo fx/タイムライン1_0000.jpg', '/assets/lo fx/タイムライン1_0000.jpg',
            '/assets/lo fx/タイムライン1_0001.jpg','/assets/lo fx/タイムライン1_0001.jpg',
            '/assets/lo fx/タイムライン1_0002.jpg','/assets/lo fx/タイムライン1_0002.jpg',
            '/assets/lo fx/タイムライン1_0003.jpg','/assets/lo fx/タイムライン1_0003.jpg',
            '/assets/lo fx/タイムライン1_0004.jpg','/assets/lo fx/タイムライン1_0004.jpg',
            '/assets/lo fx/タイムライン1_0005.jpg','/assets/lo fx/タイムライン1_0005.jpg',
            '/assets/lo fx/タイムライン1_0006.jpg','/assets/lo fx/タイムライン1_0006.jpg',
            '/assets/lo fx/タイムライン1_0007.jpg','/assets/lo fx/タイムライン1_0007.jpg',
            '/assets/lo fx/タイムライン1_0008.jpg','/assets/lo fx/タイムライン1_0008.jpg',
            '/assets/lo fx/タイムライン1_0009.jpg','/assets/lo fx/タイムライン1_0009.jpg',
            '/assets/lo fx/タイムライン1_0010.jpg','/assets/lo fx/タイムライン1_0010.jpg',
            '/assets/lo fx/タイムライン1_0011.jpg','/assets/lo fx/タイムライン1_0011.jpg',
            '/assets/lo fx/タイムライン1_0012.jpg','/assets/lo fx/タイムライン1_0012.jpg',
            '/assets/lo fx/タイムライン1_0013.jpg','/assets/lo fx/タイムライン1_0013.jpg',
            '/assets/lo fx/タイムライン1_0014.jpg','/assets/lo fx/タイムライン1_0014.jpg',
            '/assets/lo fx/タイムライン1_0015.jpg','/assets/lo fx/タイムライン1_0015.jpg',
            '/assets/lo fx/タイムライン1_0016.jpg','/assets/lo fx/タイムライン1_0016.jpg',
            '/assets/lo fx/タイムライン1_0017.jpg','/assets/lo fx/タイムライン1_0017.jpg',
            '/assets/lo fx/タイムライン1_0018.jpg','/assets/lo fx/タイムライン1_0018.jpg',
            '/assets/lo fx/タイムライン1_0019.jpg','/assets/lo fx/タイムライン1_0019.jpg',
            '/assets/lo fx/タイムライン1_0020.jpg','/assets/lo fx/タイムライン1_0020.jpg',
            '/assets/lo fx/タイムライン1_0021.jpg','/assets/lo fx/タイムライン1_0021.jpg',
            '/assets/lo fx/タイムライン1_0022.jpg','/assets/lo fx/タイムライン1_0022.jpg',
            '/assets/lo fx/タイムライン1_0023.jpg','/assets/lo fx/タイムライン1_0023.jpg',
            '/assets/lo fx/タイムライン1_0024.jpg','/assets/lo fx/タイムライン1_0024.jpg',
            '/assets/lo fx/タイムライン1_0025.jpg','/assets/lo fx/タイムライン1_0025.jpg',
            '/assets/lo fx/タイムライン1_0026.jpg','/assets/lo fx/タイムライン1_0026.jpg',
            '/assets/lo fx/タイムライン1_0027.jpg','/assets/lo fx/タイムライン1_0027.jpg',
            '/assets/lo fx/タイムライン1_0028.jpg','/assets/lo fx/タイムライン1_0028.jpg',
            '/assets/lo fx/タイムライン1_0029.jpg','/assets/lo fx/タイムライン1_0029.jpg',
            '/assets/lo fx/タイムライン1_0030.jpg','/assets/lo fx/タイムライン1_0030.jpg',
            '/assets/lo fx/タイムライン1_0031.jpg','/assets/lo fx/タイムライン1_0031.jpg',
            '/assets/lo fx/タイムライン1_0032.jpg','/assets/lo fx/タイムライン1_0032.jpg',
            '/assets/lo fx/タイムライン1_0033.jpg','/assets/lo fx/タイムライン1_0033.jpg',
            '/assets/lo fx/タイムライン1_0034.jpg','/assets/lo fx/タイムライン1_0034.jpg',
            '/assets/lo fx/タイムライン1_0035.jpg','/assets/lo fx/タイムライン1_0035.jpg',
            '/assets/lo fx/タイムライン1_0036.jpg','/assets/lo fx/タイムライン1_0036.jpg',
            '/assets/lo fx/タイムライン1_0037.jpg','/assets/lo fx/タイムライン1_0037.jpg',
            '/assets/lo fx/タイムライン1_0038.jpg','/assets/lo fx/タイムライン1_0038.jpg',
            '/assets/lo fx/タイムライン1_0039.jpg','/assets/lo fx/タイムライン1_0039.jpg',
            '/assets/lo fx/タイムライン1_0040.jpg','/assets/lo fx/タイムライン1_0040.jpg',
            '/assets/lo fx/タイムライン1_0041.jpg','/assets/lo fx/タイムライン1_0041.jpg',
            '/assets/lo fx/タイムライン1_0042.jpg','/assets/lo fx/タイムライン1_0042.jpg',
            '/assets/lo fx/タイムライン1_0043.jpg','/assets/lo fx/タイムライン1_0043.jpg',
            '/assets/lo fx/タイムライン1_0044.jpg','/assets/lo fx/タイムライン1_0044.jpg',
            '/assets/lo fx/タイムライン1_0045.jpg','/assets/lo fx/タイムライン1_0045.jpg',
            '/assets/lo fx/タイムライン1_0046.jpg','/assets/lo fx/タイムライン1_0046.jpg',
            '/assets/lo fx/タイムライン1_0047.jpg','/assets/lo fx/タイムライン1_0047.jpg',
            '/assets/lo fx/タイムライン1_0048.jpg','/assets/lo fx/タイムライン1_0048.jpg',
            '/assets/lo fx/タイムライン1_0049.jpg','/assets/lo fx/タイムライン1_0049.jpg',
            '/assets/lo fx/タイムライン1_0050.jpg','/assets/lo fx/タイムライン1_0050.jpg',
            '/assets/lo fx/タイムライン1_0051.jpg','/assets/lo fx/タイムライン1_0051.jpg',
            '/assets/lo fx/タイムライン1_0052.jpg','/assets/lo fx/タイムライン1_0052.jpg',
            '/assets/lo fx/タイムライン1_0053.jpg','/assets/lo fx/タイムライン1_0053.jpg',
            '/assets/lo fx/タイムライン1_0054.jpg','/assets/lo fx/タイムライン1_0054.jpg',
            '/assets/lo fx/タイムライン1_0055.jpg','/assets/lo fx/タイムライン1_0055.jpg',
            '/assets/lo fx/タイムライン1_0056.jpg','/assets/lo fx/タイムライン1_0056.jpg',
            '/assets/lo fx/タイムライン1_0057.jpg','/assets/lo fx/タイムライン1_0057.jpg',
            '/assets/lo fx/タイムライン1_0058.jpg','/assets/lo fx/タイムライン1_0058.jpg',
            '/assets/lo fx/タイムライン1_0059.jpg','/assets/lo fx/タイムライン1_0059.jpg',
            '/assets/lo fx/タイムライン1_0060.jpg','/assets/lo fx/タイムライン1_0060.jpg',
            '/assets/lo fx/タイムライン1_0061.jpg','/assets/lo fx/タイムライン1_0061.jpg',
            '/assets/lo fx/タイムライン1_0062.jpg','/assets/lo fx/タイムライン1_0062.jpg',
            '/assets/lo fx/タイムライン1_0063.jpg','/assets/lo fx/タイムライン1_0063.jpg',
            '/assets/lo fx/タイムライン1_0064.jpg','/assets/lo fx/タイムライン1_0064.jpg',
            '/assets/lo fx/タイムライン1_0065.jpg','/assets/lo fx/タイムライン1_0065.jpg',
            '/assets/lo fx/タイムライン1_0066.jpg','/assets/lo fx/タイムライン1_0066.jpg',
            '/assets/lo fx/タイムライン1_0067.jpg','/assets/lo fx/タイムライン1_0067.jpg',
            '/assets/lo fx/タイムライン1_0068.jpg','/assets/lo fx/タイムライン1_0068.jpg',
            '/assets/lo fx/タイムライン1_0069.jpg','/assets/lo fx/タイムライン1_0069.jpg',
            '/assets/lo fx/タイムライン1_0070.jpg','/assets/lo fx/タイムライン1_0070.jpg',
            '/assets/lo fx/タイムライン1_0071.jpg','/assets/lo fx/タイムライン1_0071.jpg',
        ],'image-carousel-3': [
            '/assets/genga rika/Chronologie 1_0000.bmp','/assets/genga rika/Chronologie 1_0000.bmp',
            '/assets/genga rika/Chronologie 1_0001.bmp','/assets/genga rika/Chronologie 1_0001.bmp',
            '/assets/genga rika/Chronologie 1_0002.bmp','/assets/genga rika/Chronologie 1_0002.bmp',
            '/assets/genga rika/Chronologie 1_0003.bmp','/assets/genga rika/Chronologie 1_0003.bmp',
            '/assets/genga rika/Chronologie 1_0004.bmp','/assets/genga rika/Chronologie 1_0004.bmp',
            '/assets/genga rika/Chronologie 1_0005.bmp','/assets/genga rika/Chronologie 1_0005.bmp',
            '/assets/genga rika/Chronologie 1_0006.bmp','/assets/genga rika/Chronologie 1_0006.bmp',
            '/assets/genga rika/Chronologie 1_0007.bmp','/assets/genga rika/Chronologie 1_0007.bmp',
            '/assets/genga rika/Chronologie 1_0008.bmp','/assets/genga rika/Chronologie 1_0008.bmp',
            '/assets/genga rika/Chronologie 1_0009.bmp','/assets/genga rika/Chronologie 1_0009.bmp',
            '/assets/genga rika/Chronologie 1_0010.bmp','/assets/genga rika/Chronologie 1_0010.bmp',
            '/assets/genga rika/Chronologie 1_0011.bmp','/assets/genga rika/Chronologie 1_0011.bmp',
            '/assets/genga rika/Chronologie 1_0012.bmp','/assets/genga rika/Chronologie 1_0012.bmp',
            '/assets/genga rika/Chronologie 1_0013.bmp','/assets/genga rika/Chronologie 1_0013.bmp',
            '/assets/genga rika/Chronologie 1_0014.bmp','/assets/genga rika/Chronologie 1_0014.bmp',
            '/assets/genga rika/Chronologie 1_0015.bmp','/assets/genga rika/Chronologie 1_0015.bmp',
            '/assets/genga rika/Chronologie 1_0016.bmp','/assets/genga rika/Chronologie 1_0016.bmp',
            '/assets/genga rika/Chronologie 1_0017.bmp','/assets/genga rika/Chronologie 1_0017.bmp',
            '/assets/genga rika/Chronologie 1_0018.bmp','/assets/genga rika/Chronologie 1_0018.bmp',
            '/assets/genga rika/Chronologie 1_0019.bmp','/assets/genga rika/Chronologie 1_0019.bmp',
            '/assets/genga rika/Chronologie 1_0020.bmp','/assets/genga rika/Chronologie 1_0020.bmp',
            '/assets/genga rika/Chronologie 1_0021.bmp','/assets/genga rika/Chronologie 1_0021.bmp',
            '/assets/genga rika/Chronologie 1_0022.bmp','/assets/genga rika/Chronologie 1_0022.bmp',
            '/assets/genga rika/Chronologie 1_0023.bmp','/assets/genga rika/Chronologie 1_0023.bmp',
            '/assets/genga rika/Chronologie 1_0024.bmp','/assets/genga rika/Chronologie 1_0024.bmp',
            '/assets/genga rika/Chronologie 1_0025.bmp','/assets/genga rika/Chronologie 1_0025.bmp',
            '/assets/genga rika/Chronologie 1_0026.bmp','/assets/genga rika/Chronologie 1_0026.bmp',
            '/assets/genga rika/Chronologie 1_0027.bmp','/assets/genga rika/Chronologie 1_0027.bmp',
            '/assets/genga rika/Chronologie 1_0028.bmp','/assets/genga rika/Chronologie 1_0028.bmp',
            '/assets/genga rika/Chronologie 1_0029.bmp','/assets/genga rika/Chronologie 1_0029.bmp',
            '/assets/genga rika/Chronologie 1_0030.bmp','/assets/genga rika/Chronologie 1_0030.bmp',
            '/assets/genga rika/Chronologie 1_0031.bmp','/assets/genga rika/Chronologie 1_0031.bmp',
            '/assets/genga rika/Chronologie 1_0032.bmp','/assets/genga rika/Chronologie 1_0032.bmp',
            '/assets/genga rika/Chronologie 1_0033.bmp','/assets/genga rika/Chronologie 1_0033.bmp',
            '/assets/genga rika/Chronologie 1_0034.bmp','/assets/genga rika/Chronologie 1_0034.bmp',
            '/assets/genga rika/Chronologie 1_0035.bmp','/assets/genga rika/Chronologie 1_0035.bmp',
            '/assets/genga rika/Chronologie 1_0036.bmp','/assets/genga rika/Chronologie 1_0036.bmp',
            '/assets/genga rika/Chronologie 1_0037.bmp','/assets/genga rika/Chronologie 1_0037.bmp',
            '/assets/genga rika/Chronologie 1_0038.bmp','/assets/genga rika/Chronologie 1_0038.bmp',
            '/assets/genga rika/Chronologie 1_0039.bmp','/assets/genga rika/Chronologie 1_0039.bmp',
            '/assets/genga rika/Chronologie 1_0040.bmp','/assets/genga rika/Chronologie 1_0040.bmp',
            '/assets/genga rika/Chronologie 1_0041.bmp','/assets/genga rika/Chronologie 1_0041.bmp',
            '/assets/genga rika/Chronologie 1_0042.bmp','/assets/genga rika/Chronologie 1_0042.bmp',
            '/assets/genga rika/Chronologie 1_0043.bmp','/assets/genga rika/Chronologie 1_0043.bmp',
            '/assets/genga rika/Chronologie 1_0044.bmp','/assets/genga rika/Chronologie 1_0044.bmp',
            '/assets/genga rika/Chronologie 1_0045.bmp','/assets/genga rika/Chronologie 1_0045.bmp',
            '/assets/genga rika/Chronologie 1_0046.bmp','/assets/genga rika/Chronologie 1_0046.bmp',
            '/assets/genga rika/Chronologie 1_0047.bmp','/assets/genga rika/Chronologie 1_0047.bmp',
            '/assets/genga rika/Chronologie 1_0048.bmp','/assets/genga rika/Chronologie 1_0048.bmp',
            '/assets/genga rika/Chronologie 1_0049.bmp','/assets/genga rika/Chronologie 1_0049.bmp',
            '/assets/genga rika/Chronologie 1_0050.bmp','/assets/genga rika/Chronologie 1_0050.bmp',
            '/assets/genga rika/Chronologie 1_0051.bmp','/assets/genga rika/Chronologie 1_0051.bmp',
            '/assets/genga rika/Chronologie 1_0052.bmp','/assets/genga rika/Chronologie 1_0052.bmp',
            '/assets/genga rika/Chronologie 1_0053.bmp','/assets/genga rika/Chronologie 1_0053.bmp',
            '/assets/genga rika/Chronologie 1_0054.bmp','/assets/genga rika/Chronologie 1_0054.bmp',
            '/assets/genga rika/Chronologie 1_0055.bmp','/assets/genga rika/Chronologie 1_0055.bmp',
            '/assets/genga rika/Chronologie 1_0056.bmp','/assets/genga rika/Chronologie 1_0056.bmp',
            '/assets/genga rika/Chronologie 1_0057.bmp','/assets/genga rika/Chronologie 1_0057.bmp',
            '/assets/genga rika/Chronologie 1_0058.bmp','/assets/genga rika/Chronologie 1_0058.bmp',
            '/assets/genga rika/Chronologie 1_0059.bmp','/assets/genga rika/Chronologie 1_0059.bmp',
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