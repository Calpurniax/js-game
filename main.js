'use strict'

const canvas = document.querySelector('#canvas');
const game = canvas.getContext('2d');

const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');

let canvasSize;
let elementsSize;
const player = {
    y: undefined,
    x: undefined,
}

window.addEventListener('load', renderGame);
window.addEventListener('resize', renderGame);

window.addEventListener('keydown', keyPress)
btnUp.addEventListener('click', moveUp);
btnDown.addEventListener('click', moveDown);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);



function startGame() {
    game.clearRect(0, 0, canvasSize, canvasSize)
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end'
    const currentMap = maps[0]
    const mapRows = currentMap.trim().split('\n')
    const mapChar = mapRows.map(eachRow => eachRow.trim().split(''))
    mapChar.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            const emoji = emojis[col]
            const posX = (elementsSize) * (colIndex + 1.2)
            const posY = (elementsSize - 2) * (rowIndex + 1)
            game.fillText(emoji, posX, posY)
            if (col === 'O' && player.x === undefined) {
                player.x = posX;
                player.y = posY;
            }
        })
    })
    renderPlayer()
}
function renderGame() {
    window.innerHeight > window.innerWidth ? canvasSize = window.innerWidth * 0.75 : canvasSize = window.innerHeight * 0.75
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    elementsSize = (canvasSize / 10)
    startGame()
}
function renderPlayer() {
    game.fillText(emojis['PLAYER'], player.x, player.y)
}
function keyPress(ev) {
    switch (ev.key) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
    }
};
function moveUp() {
    player.y -= elementsSize
    startGame()
}
function moveDown() {
    player.y += elementsSize
    startGame()
}
function moveLeft() {
    player.x -= elementsSize
    startGame()
}
function moveRight() {
    player.x += elementsSize
    startGame()
}