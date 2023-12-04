#!/usr/bin/env node

import inquirer from "inquirer";

let word = [];
let loop = true;

async function confirm() {
    let resdy = await inquirer.prompt({
        type: 'confirm',
        name:'resdy',
        message:"Do you want to continue"
    })
    if(resdy.resdy == true){
        loop = true
        console.log("\n")
    } else
    loop = false
}

while(loop){
let text = await inquirer.prompt({
    type: 'input',
    name: 'text',
    message: "Enter a paragraph to count the number of characters in it:"
})

word = text['text'].trim().split(" ");
console.log(`Your sentence length is ${word.length}`);
await confirm();
} 