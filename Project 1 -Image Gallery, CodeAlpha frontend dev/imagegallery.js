const galleryImages = document.querySelectorAll('.gallery-thumbnails img');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showFullImage();
    });
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    showFullImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    showFullImage();
});

function showFullImage() {
    fullImage.src = galleryImages[currentIndex].src;
    fullImage.width = '80vw';
    fullImage.height = '80vh';
    fullImageContainer.style.display = 'flex';
}

fullImage.addEventListener('click', () => {
    fullImageContainer.style.display = 'none';
});