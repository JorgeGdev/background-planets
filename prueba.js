var numPlanets = 80;
var planetImages = ['img/moon.png', 'img/mercury.png', 'img/venus.png', 'img/earth.png', 'img/mars.png', 'img/saturn.png', 'img/jupiter.png', 'img/uranus.png', 'img/pandora.png'];

function generatePlanetArray(bubblesElem) {
    for (let i = 0; i < numPlanets; i++) {
        let randInt = getRandomInt();
        let planetImg = document.createElement("img");
        planetImg.src = planetImages[i % planetImages.length]; // Esto asume que tienes menos imágenes que `numPlanets`
        planetImg.setAttribute('style', `--i:${randInt}`);
        bubblesElem.appendChild(planetImg);
    }
}

function getRandomInt(min = 10, max = 28) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function () {
    var bubblesElem = document.querySelector(".bubbles");
    generatePlanetArray(bubblesElem); // Cambiado de generateSpanArray a generatePlanetArray
};
