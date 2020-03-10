var rainbow = `
    <div class="rainbow">
        <div class="red"></div>
        <div class="orange"></div>
        <div class="yellow"></div>
        <div class="green"></div>
        <div class="blue"></div>
        <div class="purple"></div>
    </div>
`;

var fireworks = `
    <div class="fireworks">
        <div class="white fireworks-one"></div>
        <div class="white fireworks-two"></div>
        <div class="white fireworks-three"></div>
        <div class="white fireworks-four"></div>
        <div class="white fireworks-five"></div>
        <div class="white fireworks-six"></div>
        <div class="white fireworks-seven"></div>
        <div class="white fireworks-eight"></div>
    </div>
`;

const rainbowContainer = $('#rainbow-container');
const fireworksContainer = $('#fireworks-container');

var windowWidth;
var windowHeight;

var fireworksGeneratorMin = 1;
var fireworksGeneratorMax = 4;

function buildFireworks(){
    let firework = $(fireworks);
    let top = round(0, windowHeight);
    top = top - top%10;
    let left = round(0, windowWidth);
    left = left - left%10;
    firework.css({
        "top": top + "px",
        "left": left + "px"
    });
    fireworksContainer.append(firework);

    setTimeout(function (){
        firework.remove();
    }, 5000);

}

function fireworksGenerator(){
    setInterval(() => {
        let generatedFireworks = round(fireworksGeneratorMin, fireworksGeneratorMax);
        for (let i = 0; i < generatedFireworks; i++) {
            buildFireworks();
        }
    }, 1000);
}

function rainbowGenerator(){
    rainbowContainer.html('');
    let rainbowCount = Math.ceil(windowWidth / 2 / 70);
    let rainbowString = '';
    for (let i = 0; i < rainbowCount; i++) {
        rainbowString = rainbowString + rainbow;
    }
    rainbowContainer.append(rainbowString);

}

function round(min, max) {
    return Math.random() * (max - min) + min;
}

$(document).ready(() => {
    windowWidth = Math.round($(window).width());
    windowHeight = Math.round($(window).height());
    rainbowGenerator();
    fireworksGenerator();
});

$( window ).resize(function() {
    windowWidth = Math.round($(window).width());
    windowHeight = Math.round($(window).height());
    rainbowGenerator();
});