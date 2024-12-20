document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'images/holiday_image1.jpg',
        'images/holiday_image2.jpg',
        'images/holiday_image3.jpg'
    ];

    let currentImageIndex = 0;
    const imgElement = document.querySelector('img');

    imgElement.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgElement.src = images[currentImageIndex];
    });
});
