const GameBoard= {
    gameBoard: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ],
};

let turn= "X";
let end= 0;

const displayDiv= document.querySelector(".display");
const playButton= document.querySelector(".playButton");
const form= document.querySelector("form");
const nameBtn= document.querySelector("form>button");
const display= document.querySelector(".arrayDisplay");
const turnHeading=document.querySelector(".turnHeading");
const cells= document.querySelectorAll(".container>div");
const resultDisplay= document.querySelector(".announceWin")
const player1Name= document.querySelector("#player1Name");
const player2Name= document.querySelector("#player2Name");
const playAgainBtn= document.querySelector(".playAgain");



function createPlayer(name, marker){
    return {name, marker};
}

let player1= createPlayer("Gaurav", "X");
let player2= createPlayer("Rhea", "O");

function checkFullArray(arr){
    let chk=1;
    for(let i=0; i<3; ++i){
        for(let j=0; j<3; ++j){
            if(GameBoard.gameBoard[i][j] == "") chk=0;
        }
    }

    return chk;
}

function toggleTurn(){
    if(end==0){
        if(turn == "X") {
            turn= "O";
            turnHeading.textContent= `${player2.name}'s turn`;
        }
        else {
            turn= "X";
            turnHeading.textContent= `${player1.name}'s turn`;
        }
    }    
}

function newRound(){
    GameBoard.gameBoard= [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]

    form.style.display="none";
    turnHeading.textContent="";
    cells.forEach((cell)=>{
        cell.textContent="";
    });
    playAgainBtn.style.display="none";
    resultDisplay.textContent="";
    player1Name.value="";
    player2Name.value="";

    displayDiv.style.display= "none";
}

function announceWinner(player){
    end=1;
    resultDisplay.textContent= `${player.name} wins!!`;
    turnHeading.textContent= "Game Ended!!"
    playAgainBtn.style.display="block";
    return;
}

function announceTie(player){
    end=1;
    resultDisplay.textContent= `Its a Tie!!`;
    turnHeading.textContent= "Game Ended!!"
    playAgainBtn.style.display="block";
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
    if(end==0){
        if(GameBoard.gameBoard[row][column] != ""){
            console.log("Already a marker there!!");
            return;
        }
        GameBoard.gameBoard[row][column]= player.marker;
        checkWinner(player);
    }  
    if(end == 0 && checkFullArray()){
        announceTie(player);
        return;
    }  
}

function playRound(){
    cells.forEach((cell)=>{
    cell.addEventListener("click", (e)=>{
        if(cell.textContent==""){
            if(end==0)cell.textContent= turn;

            let row=-1;
            let column=-1;
            let expr= e.target.id;

            switch(expr){
                case "1":
                    row=0;
                    column=0;
                    break;
                case '2':
                    row=0;
                    column=1;
                    break;
                case '3':
                    row=0;
                    column=2;
                    break;
                case '4':
                    row=1;
                    column=0;
                    break;
                case '5':
                    row=1;
                    column=1;
                    break;
                case '6':
                    row=1;
                    column=2;
                    break;
                case '7':
                    row=2;
                    column=0;
                    break;
                case '8':
                    row=2;
                    column=1;
                    break;
                case '9':
                    row=2;
                    column=2;
                    break;
            }

            if(turn=="X") placeMarker(player1,row,column);
            else placeMarker(player2, row, column);

            toggleTurn();
        }        
    });
});    
}



//event-listeners
playButton.addEventListener("click", (e)=>{
    form.style.display="block";
});

nameBtn.addEventListener("click", (e) =>{
    player1['name']= player1Name.value;
    player2['name']= player2Name.value;

    displayDiv.style.display= "block";
    turnHeading.textContent= `${player1.name}'s turn`;

    if(end==1)toggleTurn();
    end=0;
    playRound();
});

playAgainBtn.addEventListener("click", (e)=>{
    newRound();
});

