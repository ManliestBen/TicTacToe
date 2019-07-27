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
        ['null', 'null', 'null'],
        ['null', 'null', 'null'],
        ['null', 'null', 'null'],
    ];
    turn = 1
    winner = null;
    
    render();
}

function render(){

}