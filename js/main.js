

/*------Constants------*/

const SQUARE_STATE = {
    'null': 'white',
    '1': 'green',       // 1 is X
    '-1': 'yellow'      // -1 is O
};



/*------Variables (state)------*/

let board, turn, winner;




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
    gameStatus.textContent = "It is X's turn!"
    
    // render();
}


function onClick(evt){
        let squareIdx = parseInt(evt.target.id.replace('sq',''));
    if (board[squareIdx] !== 'null') return;
    console.log(squareIdx);
    render(squareIdx);

}


function getWinner(){
    //run three functions (chkRow, chkCol, chkDiag) to determine if there is a winner
    //(winner would be assigned if absolute value of row/col/diag total is 3)
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
}