#! /usr/bin/env node
import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your gues b/w 1 to 10:"
    },
]);
const { userGuess } = answer;
console.log(userGuess, "userGuess", systemGeneratedNo, 'SYs');
if (userGuess === systemGeneratedNo) {
    console.log("your answer is correct \n you win!");
}
else {
    console.log("please try again good luck to your next time!");
}
