#!/usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let loop = true;


async function rest() {
        const reste = await inquirer.prompt({
        type: "list",
        name: "reste",
        choices: ["Yes", "No"],
        message:"Do you want to continue: "
    });
    if(reste.reste === "Yes"){
        loop = true;
    } else{
    loop = false;
}
}

while(loop){
    const {action} = await inquirer.prompt([
        {
            type:"list",
            name:'action',
            message:"\n===========================================TODOLIST=========================================\nWhat do you want to do?",
            choices:["Add a new todo","View all the existing Todos","Delete an existing Todo","Exit"]
        }
]);
    switch (action)
    {
    case 'Add a new todo': {
        const {todoli} =await inquirer.prompt([
        {
            type :"sting",
            name :"todoli",
            message: "What do you want to add in your todo: "
        }
    ]);
    todos.push(todoli);
    console.log(`"${todoli}" added to list`);
    await rest();
    break;
}
    case"View all the existing Todos": {
    for(let i=0;i<todos.length;i++){
            console.log(`${i+1}. ${todos[i]}`);
        }
    if(todos.length === 0){
        console.log("Enter more todos\n")
    }
        await rest();
    break;
}
    case "Delete an existing Todo": {
        let ans = await inquirer.prompt({
            type: "list",
            name : `delete`,
            message:`Which one of these is it?`,
            choices:[...Array((todos).length)].map((_,index)=>`${index + 1}`)});
            todos.at(ans.delete);
            todos.pop();
            await rest();
            break;
        }
    case "Exit": {
        var again = await inquirer.prompt([
        {
            type: "list",
            name: "restart",
            choices: ['Yes', 'No'],
            message: "Do you want to Exit: ",
        }])
        if(again.restart == "Yes"){
            loop = false;
        } else{
            loop = true;
        }
}
}
}