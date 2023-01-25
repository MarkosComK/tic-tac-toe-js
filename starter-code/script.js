const squares = document.querySelectorAll('.square')

var start = document.querySelector('#start')
start.addEventListener('click', startGame)


function startGame(){
    console.log(`${squares.length}`)
    for(let c = 0; c < squares.length; c++){
        squares[c].innerHTML = ''
    }
}