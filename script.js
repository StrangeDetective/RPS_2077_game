const robotChoiceDisplay = document.getElementById('robotArmDisplay');
const humanArmDisplay = document.getElementById('humanArmDisplay');
const humanScoreDisplay = document.getElementById("humanScoreDisplay");
const robotScoreDisplay = document.getElementById("robotScoreDisplay");
let humanScore = 0;
let robotScore = 0;



// Function to simulate the robot's choice
function computerSelection() {

    let random = Math.random();
    let choice;
    if (random < 0.33) {
        choice = 'R_ARM_ROCK.png';
    } else if (random < 0.66) {
        choice = 'R_ARM_PAPER.png';
    } else {
        choice = 'R_ARM_SCISSORS.png';
    }
    robotChoiceDisplay.setAttribute('src', choice); // Update robot's choice image
    return choice; // Return robot's choice
};

const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
startGame();


while (humanScore < 5 && robotScore < 5){
    playGame(playerChoice)
}

function playGame(playerChoice) {

    const computerChoice = computerSelection(); // Get robot's choice
    humanArmDisplay.setAttribute('src', playerChoice);
    let result="";

    if (
        (playerChoice == 'H_ARM_ROCK.png' && computerChoice == 'R_ARM_ROCK.png') || 
        (playerChoice == 'H_ARM_PAPER.png' && computerChoice == 'R_ARM_PAPER.png') ||
        (playerChoice == 'H_ARM_SCISSORS.png' && computerChoice == 'R_ARM_SCISSORS.png')) {
        result='Draw!';}

    else if (
        (playerChoice === 'H_ARM_ROCK.png' && computerChoice === 'R_ARM_SCISSORS.png') ||
        (playerChoice === 'H_ARM_PAPER.png' && computerChoice === 'R_ARM_ROCK.png') ||
        (playerChoice === 'H_ARM_SCISSORS.png' && computerChoice === 'R_ARM_PAPER.png')) {
         result='Winner!';}

    else {result='Looser!';}
    resultDisplay.textContent = result;

    switch(result){
        case 'Winner!':
            humanScore = humanScore + 1;
                if(humanScore === 5){
                    result = "YOU WON!"}
            humanScoreDisplay.textContent = humanScore;
            break;

        case 'Looser!':
            robotScore = robotScore + 1;
            if(robotScore === 5){
                result = "game over!"}
            robotScoreDisplay.textContent = robotScore;
            break;
        }

        switch(humanScore){
            case 5:
                result = "YOU WON!";
                resultDisplay.textContent = result;
                break;}
        


        if (humanScore === 5) {
            alert("YOU WON! The secrets are now yours.");
            resetGame();
            } else if (robotScore === 5) {
                    alert("You lost, access denied.");
                    resetGame();
            }
}
function resetGame() {
    humanScore = 0;
    robotScore = 0;

    humanScoreDisplay.textContent = humanScore;
    robotScoreDisplay.textContent = robotScore;
    
    resultDisplay.textContent = "Choose your first option!";
}