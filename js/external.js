// JavaScript with HTML

console.log("Hello from external JavaScript");

alert("Welcome to my website!");
let userInput = prompt("What is your favorite color?").toLocaleLowerCase();
if(userInput === "blue") {
    alert("Cool, that's my favorite color too!");
} else {
    alert("Awesome color choice!");
}

// Movie rentals

const perDayRate = 3;
let littleMermaidDays = Number(prompt("How many days for Little Mermaid?"));
let brotherBearDays = Number(prompt("How many days for Brother Bear?"));
let hercules = Number(prompt("How many days for Hercules?"));
let total = littleMermaidDays + brotherBearDays + hercules;
alert(`Your total is $${total}`);

// Contractor pay

const googleRate = 400;
const facebookRate = 350;
const amazonRate = 380;
let googleHrs = prompt("How many hours worked for Google?");
let facebookHrs = prompt("How many hours worked for Facebook?");
let amazonHrs = prompt("How many hours worked for Amazon?");
let totalPay =  googleRate * Number(googleHrs) +
                facebookRate * Number(facebookHrs) +
                amazonRate * Number(amazonHrs);
alert(`Your total pay is $${totalPay.toFixed(2)}`);

// College registration

const maxStudents = 15;
let isConflict = false;
alert("Press OK to enroll.");
// Generate random student numbers
let randomStudents = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
// Generate random conflict of schedule
let randomConflict = Math.floor(Math.random() * (1 - 0 + 1)) + 1;

if (randomConflict === 1) {
    isConflict = true;
}
// Conditional to check registration and alert user
if(!isConflict && randomStudents <= maxStudents) {
    alert("Awesome you are enrolled!");
} else if (randomStudents >= 15) {
    alert("Sorry can't enroll, class is full.");
} else if (isConflict) {
    alert("Sorry can't enroll, conflict in your schedule.");
}