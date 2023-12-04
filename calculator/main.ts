#!/usr/bin/env node

import {add} from "./add.js";
import {sub} from "./subtract.js";
import {multiply} from "./multiply.js";
import {divide} from "./divide.js";

import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        message: "Enter your first number: ",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter your second number: ",
        type: "number",
        name: "num2"
    },
    {
        message: "Select Operator: ",
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator"
    }
])

// console.log(answer);
// if(answer.operator === "+"){
//     let result = add (answer.num1, answer.num2);
//     console.log(result);
// } else if (answer.operator === "-"){
//     let result = sub(answer.num1, answer.num2);
//     console.log(result);
// } else if (answer.operator === "*"){
//     let result = multiply(answer.num1, answer.num2);
//     console.log(result);
// } else{
//     let result = divide(answer.num1, answer.num2);
//     console.log(result);
// }

console.log(answer);
switch(answer.operator){
    case "+":{
        let result = add(answer.num1, answer.num2);
        console.log(result);
        break;
    }
    case "-":{
        let result = sub(answer.num1, answer.num2);
        console.log(result);
        break;
    }
    case "*":{
        let result = multiply(answer.num1, answer.num2);
        console.log(result);
        break;
    }
    case "/":{
        let result = divide(answer.num1, answer.num2);
        console.log(result);
        break;
    }
}