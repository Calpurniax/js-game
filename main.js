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
const endPosition = {
    y: undefined,
    x: undefined,
}
let knifePositions = []

window.addEventListener('load', renderGame);
window.addEventListener('resize', renderGame);

window.addEventListener('keydown', keyPress)
btnUp.addEventListener('click', moveUp);
btnDown.addEventListener('click', moveDown);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);



function startGame() {
    game.font = elementsSize - 10 + 'px Verdana';
    game.textAlign = 'end'
    const currentMap = maps[0]
    const mapRows = currentMap.trim().split('\n')
    const mapChar = mapRows.map(eachRow => eachRow.trim().split(''))
    game.clearRect(0, 0, canvasSize, canvasSize)
    knifePositions = [];
    mapChar.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            const emoji = emojis[col]
            const posX = elementsSize * (colIndex + 1);
            const posY = elementsSize * (rowIndex + 1)

            if (col === 'O' && player.x === undefined) {
                player.x = posX;
                player.y = posY;
            } else if (col === 'I') {
                endPosition.x = posX;
                endPosition.y = posY;
            } else if (col === 'X') {
                knifePositions.push({
                    x: posX,
                    y: posY
                })
            }
            game.fillText(emoji, posX, posY)

        })
    })
    renderPlayer()
}
function renderGame() {
    window.innerHeight > window.innerWidth ? canvasSize = window.innerWidth * 0.8 : canvasSize = window.innerHeight * 0.8
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    elementsSize = canvasSize / 10 - 1;
    startGame()
}
function renderPlayer() {
    const achieveEndX = player.x.toFixed(3) === endPosition.x.toFixed(3);
    const achieveEndY = player.y.toFixed(3) === endPosition.y.toFixed(3);
    const achieveEnd = achieveEndX && achieveEndY;
    if (achieveEnd) {
        console.log('subiste de nivel')
    }
    const enemyCollision = knifePositions.find(knife => {
        const enemyCollisionX = knife.x.toFixed(3) === player.x.toFixed(3);
        const enemyCollisionY = knife.y.toFixed(3) === player.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
    })
    if (enemyCollision) {
        console.log('te cortaste')
    }
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
    if ((player.y - elementsSize) < elementsSize) {
        console.log(player.y)
    } else {
        player.y -= elementsSize
        startGame()
    }

}
function moveDown() {
    if ((player.y + elementsSize) > canvasSize) {
        console.log(player.y)
    } else {
        player.y += elementsSize
        startGame()
    }
}
function moveLeft() {
    if ((player.x - elementsSize) < elementsSize) {
        console.log(player.x)
    } else {
        player.x -= elementsSize
        startGame()
    }
}
function moveRight() {
    if ((player.x + elementsSize) > canvasSize) {
        console.log(player.x)
    } else {
        player.x += elementsSize
        startGame()
    }
}