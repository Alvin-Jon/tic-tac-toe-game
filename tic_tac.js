const winningMoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [7,5,3],
    [1,5,9]
]
let X = {
    val : 'X',
    moves: [],
}

let O ={
    val : 'O',
    moves: [],
}

let game = {
    alive: true,
    turn: X,
}

let ai_Enabled = true

let retryBtn = document.getElementById('retry')
let box = document.querySelectorAll('.box')
let pickedBoxes = []
box.forEach((btn,i) => {
    btn.addEventListener('click', () => {
        if(game.alive){
            let available = false
            let picked = box[i].id
            if(box[i].textContent === ''){
                available = true
                pickedBoxes.push(picked)
            }

           if(available){ box[i].textContent = game.turn.val
            let gameArr = game.turn.moves
            gameArr[gameArr.length] = i + 1
            console.log(game.turn.moves)
            checkPlay()
           // console.log(pickedBoxes.length)
           checkSpace(pickedBoxes)
            if(game.turn === X){
                game.turn = O
            }else{
                game.turn = X
            }ai()
          if(game.alive){document.getElementById('span').textContent = game.turn.val +'  turn' }
        }}
    })
})


function checkPlay(){
let myMove = game.turn.moves
for (let i = 0; i < winningMoves.length; i++) {
    let precision = 0
    for (let j = 0; j < winningMoves[i].length; j++) {
        if(myMove.includes(winningMoves[i][j])){
            precision++
            if(precision === 3){
               // console.log(winningMoves[i] + "Win's")
                //winnig codes
                highlightWinningBox(winningMoves[i])
                game.alive = false
                document.getElementById('span').textContent = 'Player  ' + game.turn.val + "  Win's"
            }
        }
        
    }
    
}
}

function highlightWinningBox(arr){
 for (let x = 0; x < arr.length; x++) {
    box.forEach((btn,i) => {
        if(box[i].id.includes(arr[x])){
          btn.classList.add('win')  
        }
      }) 
 }
}

function checkSpace(arr){
    checkPlay()
  if(arr.length === 9 && game.alive === true){
    game.alive = false
    box.forEach((btn,i) => {
          btn.classList.add('none')
  })
  document.getElementById('span').textContent = 'NO WINNER'
}
}

function reset(){
    X.moves = []
    O.moves = []
    pickedBoxes = []
    game.alive = true
   box.forEach((btn,i) => {
       box[i].textContent = ''
       box[i].classList.remove('none')
       box[i].classList.remove('win')
   })

   document.getElementById('span').textContent = game.turn.val +'  turn'
   ai()
}


