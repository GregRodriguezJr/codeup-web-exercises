// JavaScript with HTML

// console.log("Hello from external JavaScript");
//
// alert("Welcome to my website!");
// let userInput = prompt("What is your favorite color?").toLocaleLowerCase();
// if(userInput === "blue") {
//     alert("Cool, that's my favorite color too!");
// } else {
//     alert("Awesome color choice!");
// }

// Movie rentals

// const perDayRate = 3;
// let littleMermaidDays = Number(prompt("How many days for Little Mermaid?"));
// let brotherBearDays = Number(prompt("How many days for Brother Bear?"));
// let herculesDays = Number(prompt("How many days for Hercules?"));
// let total = (littleMermaidDays * perDayRate) +
//             (brotherBearDays * perDayRate) +
//             (herculesDays * perDayRate);
// alert(`Your total is $${total.toFixed(2)}`);

// Contractor pay

// const googleRate = 400;
// const facebookRate = 350;
// const amazonRate = 380;
// let googleHrs = prompt("How many hours worked for Google?");
// let facebookHrs = prompt("How many hours worked for Facebook?");
// let amazonHrs = prompt("How many hours worked for Amazon?");
// let totalPay =  googleRate * Number(googleHrs) +
//                 facebookRate * Number(facebookHrs) +
//                 amazonRate * Number(amazonHrs);
// alert(`Your total pay is $${totalPay.toFixed(2)}`);

// College registration

const maxStudents = 15;
let isConflict = false;
alert("Press OK to enroll.");
// Generate random student numbers
const randomStudents = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
// Generate random conflict of schedule
const randomConflict = Math.floor(Math.random() * (1 + 1)) + 1;

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

// Product Offer

let memberItems = 1;
let premiumMember = true;
let offerExpired = false;

// Generate offers and expired offers
const randomOffer = Math.random();
if (randomOffer <= .5) {
    offerExpired = true;
}

alert("Proceed to checkout");
// Conditional to check if discount applied
if(!offerExpired && memberItems > 2 || !offerExpired && premiumMember) {
    alert("Congratulations! Discount applied!");
} else {
    alert("Sorry the offer cant be applied.");
}
