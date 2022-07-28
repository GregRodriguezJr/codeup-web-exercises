// Movie rentals

const perDayRate = 3;
let littleMermaidDays = Number(prompt("How many days for Little Mermaid?"));
let brotherBearDays = Number(prompt("How many days for Brother Bear?"));
let hercules = Number(prompt("How many days for Hercules?"));
let total = littleMermaidDays + brotherBearDays + hercules;
alert(`Your total is $${total}`);
