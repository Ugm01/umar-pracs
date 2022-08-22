function openPlayerConfig(event){
    editedPlayer = + event.target.dataset.playerid
    backdropElement.style.display = 'block'
    confiqOverlayElement.style.display = 'block'
}

function closePlayerConfig(){
    backdropElement.style.display = 'none'
    confiqOverlayElement.style.display = 'none'
    formElement.firstElementChild.classList.remove('error')
    errorOutputElement.textContent = ''
    formElement.children[0].children[1].value = ''

}

function savePlayerConfig(event){
event.preventDefault() // to prevent default form submission to a link
const formData = new FormData(event.target)
const enteredPlayerName = formData.get('playername').trim()

if(!enteredPlayerName){ //enteredPlayerName === ''
    event.target.firstElementChild.classList.add('error') //to add a class to first child of form
    errorOutputElement.textContent = ' please enter a valid name!'
    return // to make the feature executed only here
}

const updatedPlayerDataElement = document.getElementById('player-' +editedPlayer + '-data')
updatedPlayerDataElement.children[1].textContent = enteredPlayerName
players[editedPlayer - 1].name = enteredPlayerName
closePlayerConfig()
}