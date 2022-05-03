// generate a random dice number from 1-6
// display & connect that result as a big font to the current player
    // if the dice rolls 1, make the current player's diceroll == 0, and the game switches to another player
    // if it's !== 1, the add the current player's diceroll score to the total score
        //if totalcore == 100, game ends and current player wins
        //if it rolls 1, current player's diceroll score == 0, game switches to another player
    //if the player clicked on the hold button, the total score is being hold, and switches to another player
    //if the user clicks on the reset game button
        //set player one and player two's dice roll score to 0
        //set player one and player two's total score to 0
        //if player two is currently playing, set it so that the game begins with player 1's turn.

let diceImg = document.querySelector("#dice-img");
let playerOneDiceRollScore = document.querySelector("#player-one-dice-roll-score");
let playerOneTotalScore = document.querySelector("#player-one-total-score");

//generate a random number from 1 - 6
function generateRandomNum(){
    return Math.floor(Math.random()*6+1)
}

//starting conditions
let totalScore = 0;


//create a function that rolls dice & display it to the current player
function rollDice(){
    
    //dice result & display
    var randomNum = generateRandomNum()
    playerOneDiceRollScore.innerText = randomNum;

    // display dice image
    diceImg.src = `./images/dice-${randomNum}.png`

    // if the dice rolls 1, change turn to next player.
    if(randomNum !== 1){
        totalScore += randomNum;
        playerOneTotalScore.textContent = totalScore;
    }
    else{
        
    }

}