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





/*------Functions------*/

init();

function init() {
    board = [
        ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null']
    ];
    turn = 1
    winner = null;
    
    render();
}


function getWinner(){
    //run three functions (chkRow, chkCol, chkDiag) to determine if there is a winner
    //(winner would be assigned if absolute value of row/col/diag total is 3)
}
function render(){

}