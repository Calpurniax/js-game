'use strict'

const canvas = document.querySelector('#canvas');
const game = canvas.getContext('2d');
const screen = window.innerWidth;
let canvasSize;
let elementsSize;

window.addEventListener('load', renderGame)
window.addEventListener('resize', renderGame)

function startGame() {
    //const elementsSize = (canvasSize / 10);
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end'
    const currentMap = maps[1]
    const mapRows = currentMap.trim().split('\n')
    const mapChar = mapRows.map(eachRow => eachRow.trim().split(''))
    mapChar.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            const emoji = emojis[col]
            const posX = (elementsSize) * (colIndex + 1.2)
            const posY = (elementsSize - 2) * (rowIndex + 1)
            game.fillText(emoji, posX, posY)
        })
    })
}
function renderGame() {
    window.innerHeight > window.innerWidth ? canvasSize = window.innerWidth * 0.75 : canvasSize = window.innerHeight * 0.75


    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    elementsSize = (canvasSize / 10)
    startGame()
}