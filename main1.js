let currentIndex = 0;
const images = [
    'images/pxfuel.jpg',
    'images/Home.jpg',
    'images/pxfuel.jpg'
];

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    document.querySelector('.slide-background').style.backgroundImage = `url('${images[currentIndex]}')`;
}

setInterval(changeBackground, 5000); // Change image every 5 seconds