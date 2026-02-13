const gameBoard= (() => {
    let gameBoard= [
        ["", ""],
        ["", ""];
        ["", ""];
    ];
})();

function createPlayer(name, marker) {
    return {name, marker};
}

function placeMarker(marker, row, column){
    gameBoard.gameBoard[row][column]= marker;
}