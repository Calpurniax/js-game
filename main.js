'use strict'

const canvas = document.querySelector('#canvas');
const game = canvas.getContext('2d');
const screen = window.innerWidth;
let canvasSize;

window.addEventListener('load', renderGame)
window.addEventListener('resize', renderGame)

function startGame() {
    const elementsSize = (canvasSize / 10);
    game.font = elementsSize + 'px Verdana';
    for (let i = 0; i <= 10; i++) {
        game.fillText(emojis['X'], 0, elementsSize * i)
    }
}
function renderGame() {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.75
    } else {
        canvasSize = window.innerHeight * 0.75
    }
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    startGame()
}