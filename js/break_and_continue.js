// Prompt the user for an odd number between 1 and 50. 
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, 
// except for the number the user entered.

// do {
//     console.log("test");
//     let userNum = 5;
//     console.log(userNum);
// } while (isNaN(userNum) || userNum % 2 === 0 ||
//     userNum >= 50 || userNum < 1);

// While loops

// let num = 1;
// while (num < 65536) {
//     num *= 2;
//     console.log(num);
// }

// An ice cream seller can't go home until she sells all of her cones. 
// First write enough code that generates a random number between 50 and 100 
// representing the amount of cones to sell before you start your loop. 
// Inside of the loop your code should generate another random number between 1 and 5, 
// simulating the amount of cones being bought by her clients. 
// Use a do-while loop to log to the console the amount of cones sold to each person. 
// The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

// Output should be
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

function iceCreamCones() {
    let allCones = Math.floor(Math.random() * 50) + 50;
    do {
        let soldCones = Math.floor(Math.random() * 5) + 1;
        if (soldCones <= allCones) {
            console.log(`${soldCones} cones sold...`);
            allCones -= soldCones;
        } else if (soldCones > allCones) {
            console.log(`Cannot sell you ${soldCones} cones I only have ${allCones}...`);
        }
        console.log(allCones);
    } while (allCones !== 0);
    console.log(`Yay! I sold them all!`);
}
iceCreamCones()
