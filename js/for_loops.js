// For Loops

function showMultiplicationTable(num) {
    for(let i = 1; i < 11; i++) {
        let total = num * i;
        console.log(`${num} x ${i} = ${total}`);
    }
}
showMultiplicationTable(7);

function isEvenOrOdd() {
    for (let i = 1; i < 11; i++) {
        let randomNum = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        randomNum % 2 === 0 ? console.log(`${randomNum} is even`) : console.log(`${randomNum} is odd`);
    }
}
isEvenOrOdd()

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
