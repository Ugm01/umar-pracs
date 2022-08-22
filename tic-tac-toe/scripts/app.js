const gameData = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
]

let editedPlayer = 0
let activePlayer = 0
let currentRound = 1
let gameIsOver = false
const players = [
    {
        name: '',   // to store the playername in Javascript
        symbol: "X"
    },
    {
        name: '',
        symbol: "O" 
    }
]
const backdropElement = document.getElementById('backdrop')
const confiqOverlayElement = document.getElementById('config-overlay')
const formElement = document.querySelector('form')
const errorOutputElement = document.getElementById ('config-errors')
const activeGameElement = document.getElementById('active-game')
let activePlayerNameElement = document.getElementById('active-player-name')
const gameOverElement = document.getElementById('game-over')


const editPlayer1BtnElement = document.getElementById('edit-player1-btn')
const editPlayer2BtnElement = document.getElementById('edit-player2-btn')
const cancelConfigbtnElement = document.getElementById('cancel-config')


editPlayer1BtnElement.addEventListener('click',openPlayerConfig )
editPlayer2BtnElement.addEventListener('click',  openPlayerConfig)
const newGameBtnElement = document.getElementById ('new-game-btn')
const gameBoardElements = document.querySelectorAll('#game-board li')
const gameBoardElement = document.getElementById('game-board')


cancelConfigbtnElement.addEventListener('click', closePlayerConfig)
backdropElement.addEventListener('click',closePlayerConfig )
formElement.addEventListener('submit', savePlayerConfig)
newGameBtnElement.addEventListener('click',startNewGame)
for ( const gameBoardElement of gameBoardElements){
  gameBoardElement.addEventListener('click',selectGameField)
}
//gameBoardElement.addEventListener('click', selectGameField)