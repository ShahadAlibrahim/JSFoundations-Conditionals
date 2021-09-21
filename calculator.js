const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
//const name = prompt("What's your name? ");
//console.log(`Hi, I'm ${name}.`);

const firstnum=+prompt("Please enter the first number:")
const secondnum=+prompt("Please enter the second number:")
const operation=prompt("Please choose the operation(+,-,/,*):")

if(!isNaN(firstnum) && !isNaN(secondnum)){

   if(operation === "+"){
    console.log(`the answer is ${firstnum + secondnum}`)
} else if(operation === "-"){
    console.log(`the answer is ${firstnum-secondnum}`)
} else if(operation === "*"){
    console.log(`the answer is ${firstnum*secondnum}`)
} else if(operation === "/"){
    console.log(`the answer is ${firstnum/secondnum}`)}
    else { (console.log("operation is invalid"))
}} 
else {
    console.log("Invalid numbers") }
