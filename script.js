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
            humanScoreDisplay.textContent = humanScore;
            break;
        case 'Looser!':
            robotScore = robotScore + 1;
            robotScoreDisplay.textContent = robotScore;
            break;
        }

}


/* 

if (playerChoice === computerChoice){
    result='Draw'}
else if (playerChoice == 'Rock' && computerChoice == 'Paper'){
        result='Earned a point, player!'}
else if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
        result='Earned a point, player!'}
else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
        result='lost a point, player!'}

else if (playerChoice == 'Paper' && computerChoice == 'Scissors'){
        result='lost a point, player!'}

else if (playerChoice == 'Scissors' && computerChoice == 'Rock'){
        result='lost a point, player!'}

else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
        result='Earned a point, player!'} */