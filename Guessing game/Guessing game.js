// Math.floor(Math.random()* 20)+1;
// let secretnumber = 7;

let secretnumber = Math.floor(Math.random()* 20)+1;;

while (true) {  
    let guess = parseInt(prompt("Guess the secret number (1-20)"));

    if (secretnumber === guess) {
        alert("Correct Guess!") 
        break;  //break the loop when you guess correctly
    } else if(guess < secretnumber) {
        alert("Sorry, incorect Guess! Too low");    //displays if the number is too low
    }else{
        alert("Sorry, incorect Guess! Too high")// display if the number is too high
    }
}










