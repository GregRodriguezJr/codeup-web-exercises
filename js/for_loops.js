//For Loops

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num) {
    for(let i = 1; i < 11; i++) {
        let total = num * i;
        console.log(`${num} x ${i} = ${total}`);
    }
}
showMultiplicationTable(7);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

function isEvenOrOdd() {
    for (let i = 1; i < 11; i++) {
        let randomNum = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        randomNum % 2 === 0 ? console.log(`${randomNum} is even`) : console.log(`${randomNum} is odd`);
    }
}
isEvenOrOdd()

// Use a for loop to logout a number pyramid

function pyramid() {
    let output = '';
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= i; j++) {
            output += i;
        }
        console.log(output);
        output = '';
    }
}
pyramid()

// Different solution for first pyramid

function pyramidTwo() {
    for (let i = 1; i <= 9; i++) {
        console.log(i.toString().repeat(i));
    }
}
pyramidTwo()

// Create a for loop that uses console.log to create countdown from 100 to 5 using multiples of 5.

function countdown() {
    for (let i = 100; i >= 5; i -= 5){
        console.log(i);
    }
}
countdown()