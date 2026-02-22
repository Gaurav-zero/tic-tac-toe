const GameBoard= {
    gameBoard: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ],
};

const playButton= document.querySelector(".playButton");
const form= document.querySelector("form");
const nameBtn= document.querySelector("form>button");
const display= document.querySelector(".arrayDisplay");
const turnHeading=document.querySelector(".turnHeading");
const cells= document.querySelectorAll(".container>div");


function createPlayer(name, marker){
    return {name, marker};
}

function newRound(){
    GameBoard.gameBoard= [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]
}

function announceWinner(player){
    console.log(`${player.name} wins!!`);
    return;
}

function checkWinner(player){
    
    for(let i=0; i<GameBoard.gameBoard.length; ++i){
        let win=1;
        for(let j=0; j<GameBoard.gameBoard[0].length; ++j){
            if(GameBoard.gameBoard[i][j] != player.marker)win=0;                
        }
        if(win == 1){
            announceWinner(player);
            return;
        }
    }

    for(let j=0; j<GameBoard.gameBoard[0].length; ++j){
        let win=1;
        for(let i=0; i<GameBoard.gameBoard.length; ++i){
            if(GameBoard.gameBoard[i][j] != player.marker)win=0;                
        }
        if(win == 1){
            announceWinner(player);
            return;
        }
    }

    let win=1;
    for(let i=0; i<GameBoard.gameBoard.length; ++i){
        for(let j=0; j<GameBoard.gameBoard[0].length; ++j){
            if(i==j){
                if(GameBoard.gameBoard[i][j] != player.marker)win=0;                    
            }
            
        }
    }
    if(win == 1){
        announceWinner(player);
        return;
    }

    win=1;
    if(GameBoard.gameBoard[2][0] != player.marker) win=0;
    if(GameBoard.gameBoard[1][1] != player.marker) win=0;
    if(GameBoard.gameBoard[0][2] != player.marker) win=0;

    if(win == 1){
        announceWinner(player);
        return;
    }
}

function placeMarker(player, row, column){
    if(GameBoard.gameBoard[row][column] != ""){
        console.log("Already a marker there!!");
        return;
    }
    GameBoard.gameBoard[row][column]= player.marker;
    checkWinner(player);
}

function playRound(){
    const player1= createPlayer("Gaurav", "X");
    const player2= createPlayer("Rhea", "O");
}



//event-listeners
playButton.addEventListener("click", (e)=>{
    form.style.display="block";
});

nameBtn.addEventListener("click", (e) =>{
    playRound();
});

cells.forEach((cell)=>{
    cell.addEventListener("click", )
});