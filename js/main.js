let test = "Test";
console.log(test);

/*------Constants------*/

const SQUARE_STATE = {
    'null': 'white',
    '1': 'green',
    '-1': 'yellow'
};



/*------Variables (state)------*/

let board, turn, winner;




/*------Cached Element References------*/






/*------Event Listeners------*/

document.querySelector('section.board').addEventListener('click', onClick);



/*------Functions------*/

init();

function init() {
    board = [
        ['null', 'null', 'null', 'null', '1', 'null', 'null', 'null', 'null']
    ];
    turn = 1;
    winner = null;
    
    // render();
}


function onClick(evt){
    let squareNum = parseInt(evt.target.id.replace('sq',''));
    console.log(squareNum);
    render(squareNum);

}


function getWinner(){
    //run three functions (chkRow, chkCol, chkDiag) to determine if there is a winner
    //(winner would be assigned if absolute value of row/col/diag total is 3)
}
function render(squareNum){
    console.log(squareNum);    
    // console.log(`sq${squareNum}`);
    // let div = "sq2"
    
    document.getElementById(`sq${squareNum}`).style.backgroundColor = SQUARE_STATE[turn];
    // let div = document.getElementById(`sq${squareNum}`);
    // div.style.backgroundColor = 'white';
    // div.style.backgroundColor = SQUARE_STATE[turn];
    // console.log(div);
    console.log('turn' + turn);
    console.log(SQUARE_STATE[turn]);
    turn *= -1;
}