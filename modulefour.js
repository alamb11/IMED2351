// JavaScript Document
const name = "Alana";
const age = 20;
const birthday = "February 29";
const cat = "Robbie";

console.log(`Hello my name is ${name} and I am ${age} years old. My birthday is on ${birthday} and I have a cat named ${cat}`)

let day;
switch (new Date().getDay()) {
    case 0: 
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday"
}
document.getElementById("date").innerHTML = "Today is " + day;