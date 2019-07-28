

/*------Constants------*/

const SQUARE_STATE = {
    'null': 'white',
    '1': 'green',       // 1 is X
    '-1': 'yellow'      // -1 is O
};



/*------Variables (state)------*/

let board, turn, winner;
let turnCount = 1;




/*------Cached Element References------*/

let gameStatus = document.getElementById('message');




/*------Event Listeners------*/

document.querySelector('section.board').addEventListener('click', onClick);



/*------Functions------*/

init();

function init() {
    board = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
    turn = 1;
    winner = null;
    gameStatus.textContent = "It is X's turn!";
    
    // render();
}


function onClick(evt){
        let squareIdx = parseInt(evt.target.id.replace('sq',''));
    if (board[squareIdx] !== 'null') return;
    console.log(squareIdx);
    getWinner();
    render(squareIdx);

}


function getWinner(){
    let winner = null;
    if (board[0]+board[1]+board[2] === 3 ||  board[3]+board[4]+board[5] === 3 ||  board[6]+board[7]+board[8] === 3 ||  board[0]+board[3]+board[6] === 3 ||  board[1]+board[4]+board[7] === 3 ||  board[2]+board[5]+board[8] === 3 ||  board[0]+board[4]+board[8] === 3 ||  board[2]+board[4]+board[6] === 3){
        gameStatus.textContent = "X wins the game!";
    } 
    
    if (board[0]+board[1]+board[2] === -3 ||  board[3]+board[4]+board[5] === -3 ||  board[6]+board[7]+board[8] === -3 ||  board[0]+board[3]+board[6] === -3 ||  board[1]+board[4]+board[7] === -3 ||  board[2]+board[5]+board[8] === -3 ||  board[0]+board[4]+board[8] === -3 ||  board[2]+board[4]+board[6] === -3){
        gameStatus.textContent = "O wins the game!";
    }
    
    if (turnCount === 10){
        gameStatus.textContent = "This game is a draw!";
        console.log("Count hit"); 
    }
    
    
}



function render(squareIdx){
    console.log(squareIdx);    
    setLetter = document.getElementById(`sq${squareIdx}`);
    document.getElementById(`sq${squareIdx}`).style.backgroundColor = SQUARE_STATE[turn];
    console.log('turn' + turn);
    console.log(SQUARE_STATE[turn]);
    board[squareIdx] = turn;
    if (turn === 1) {
        setLetter.textContent = "X";
        gameStatus.textContent = "It is O's turn!"
    }   else {
        setLetter.textContent = "O";
        gameStatus.textContent = "It is X's turn!"
}
    turn *= -1;
    turnCount++;
    getWinner();
}