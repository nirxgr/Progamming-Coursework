// First slider (top banner)
const images = [
    "images/image1.webp",
    "images/image2.webp",
    "images/image3.webp"
];

let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
}, 3000);

// Second slider (bottom banner) - Fixed version
const imagesForBottomSlider = [
    "images/changer1.webp",
    "images/this.webp"
];

let currentBottomIndex = 0;
const bottomSliderImage = document.getElementById("slider-image2");

setInterval(() => {
    currentBottomIndex = (currentBottomIndex + 1) % imagesForBottomSlider.length;
    bottomSliderImage.src = imagesForBottomSlider[currentBottomIndex];
}, 3000);