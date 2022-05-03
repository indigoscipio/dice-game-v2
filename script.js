// generate a random dice number from 1-6
// display & connect that result as a big font to the current player
    // if the dice rolls 1, make the current player's diceroll == 0, and the game switches to another player
    // if it's !== 1, the add the current player's diceroll score to the total score
        //if totalcore == 100, game ends and current player wins
        //if it rolls 1, current player's diceroll score == 0, game switches to another player

let diceImg = document.querySelector("#dice-img");
let player1DiceRollScore = document.querySelector("#player-1-dice-roll-score");
let player1TotalScore = document.querySelector("#player-1-total-score");
let btnRollDice = document.querySelector("#roll-dice");
let player1ActiveBorder = document.querySelector(".col-left");
let player2ActiveBorder = document.querySelector(".col-right");


//generate a random number from 1 - 6
function generateRandomNum(){
    return Math.floor(Math.random()*6+1)
}

//starting conditions
let totalScore = 0;
let activePlayer = 1; //active player is either one or two
btnRollDice.addEventListener("click", rollDice);

//create a function that rolls dice & display it to the current player
function rollDice(){
    //dice result & display
    var randomNum = generateRandomNum()
    // player1DiceRollScore.innerText = randomNum;

    // display dice image
    diceImg.src = `./images/dice-${randomNum}.png`
    player1ActiveBorder.classList.remove("hidden");

    // if the dice rolls 1, change turn to next player.
    if(randomNum !== 1){
        totalScore += randomNum;
        document.querySelector(`#player-${activePlayer}-total-score`).innerText = totalScore;
        // player1TotalScore.textContent = totalScore;
    }
    else{
        document.querySelector(`#player-${activePlayer}-total-score`).innerText = 0;
        if(activePlayer === 1){ 
            activePlayer = 2;
        }
        else{
            activePlayer = 1;
        }
        totalScore = 0;
        
        player1ActiveBorder.classList.toggle("hidden");
        player2ActiveBorder.classList.toggle("hidden");
    }
}

    //if the player clicked on the hold button, the total score is being hold, and switches to another player
    //if the user clicks on the reset game button
        //set player one and player two's dice roll score to 0
        //set player one and player two's total score to 0
        //if player two is currently playing, set it so that the game begins with player 1's turn.
