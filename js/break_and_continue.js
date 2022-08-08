// Prompt the user for an odd number between 1 and 50. 
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, 
// except for the number the user entered.



do {
    userNum = prompt("Please enter a number between 1 and 50");
    for (let i = 1; i <= 50; i++) {
        if(i % 2 !== 0 && i === Number(userNum)) {
            console.log(`Skipping number: ${i}`);
        } else if (i % 2 !== 0) {
            console.log(`Here is an odd number: ${i}`);
        }
    }
} while (isNaN(userNum) || userNum % 2 === 0 || userNum >= 50 || userNum < 1);