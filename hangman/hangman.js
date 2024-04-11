// let words = [
//     "monkey",
//     "javascrpit",
//     "amazing",
//     "pancake",
//     "hunger",
//     "sleepy",
//     "executive",
//     "london",
//     "timezone",
//     "programming"
// ];
// // take the word out of the arry
// let word = words[Math.floor(Math.random() * words.length)];
// let answerarray = [];       
// for (let i = 0; i < word.length; i++) {
//     answerarray[i] = "_";
// }

// let remainingletters = word.length;
// let guess;
// let lives = 20;

// //the main loop

// while (remainingletters > 0 && lives > 0) {
//     //shows the players their progress

//     alert(answerarray.join(" "));
//     guess = prompt("Guess a letter, or click cancel to stop playing. \n you have " + lives + "left");
//     if (guess === null) {
//         break;
//     } else if (guess.length > 1) {
//         alert("please guess a single letter.");
//         //only letter guess

//     } else {
//         let correctguesses = 0;
//         guess = guess.toLowerCase();
//         for (let j = 0; j < word.length; j++) {
//             if (guess === word[j]) {
//                 if (answerarray[j] !== "_") {
//                     alert("You have already guessed this letter " + guess);
//                 } else {
//                     answerarray[j] = guess;
//                     correctguesses++;
//                     remainingletters--;
//                 }
//             }
//         }
//         if (correctguesses === 0) {
//             lives--;
//         }
//     }
// }



// //after while loop

// if (guess === null) {
//     alert("Sorry to see you leave. \nThe answer was " + word + " and you had " + lives + " to left.");
// } else{
//     alert("Congrats! You won! The word is " + word + " and you had " + lives + " lives left");
// }





let words = [
    "monkey",
    "javascrpit",
    "amazing",
    "pancake",
    "hunger",
    "sleepy",
    "executive",
    "london",
    "timezone",
    "programming"
];  //all the words the user will be guessing

let word = pickWord();      //assined word to a function (pickword)
let answerArray = [];
let remainingLetters = word.length;
let guess;
let lives = 5;              //the amount of lives the user has
setupAnswerArray();

while (remainingLetters > 0 && lives > 0) {
    showPlayerProgress();
    guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        let correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer();

//function list

function pickWord() {
    return words[Math.floor(Math.random() * words.length)];
};// Return a random word

function setupAnswerArray() {
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
};      // Return the answer array
//this is a loop, i means less than the word.length


function showPlayerProgress() {
    alert(answerArray.join(" ") + `  you have ${lives} left`);
    // Use alert to show the player their progress
};

function getGuess() {
    return prompt("Guess a letter, or click cancel to stop playing");

};

function updateGameState() {
    guess = guess.toLowerCase();
    let correctGuesses = 0;
    for (let j = 0; j < word.length; j++) {
        if (guess === word[j]) {
            if (answerArray[j] !== "_") {
                alert(`you have already guessed this letter ${guess}`);
                break;

            } else {
                answerArray[j] = guess;
                correctGuesses++;
            }
        }
    }
    if (correctGuesses === 0) {
        lives--;
    }

    return correctGuesses;

    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
};
function showAnswerAndCongratulatePlayer() {
    if (guess === null) {
        alert(`sorry to see you leave, come back soon.\nthe answer is ${word}`);    // when they press cansole this alert will show
    } else if (remainingLetters === 0) {
        alert(`congrats! you won! the word is ${word}`);    //when the person won the game
    } else if (lives === 0) {
        alert(`oh no you have no more lives left ${lives}`);    //when you ran out of lives
    } else {
        alert(`uhhh something went wrong?!`);   //players should not get this alert, if so there is a error with the code
    }
}






