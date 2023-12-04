#!/usr/bin/env node

import inquirer from "inquirer";

let acc ={
    name: "Kamil Zafar",
    pin: 1234,
    acctype: "Current Account",
    Balance: 50000,
};

let user = await inquirer.prompt([
    {
        type : "number",
        name : "pin",
        message :"Enter your 4 digit Pin: ",
    }
])
    if(acc.pin == user.pin){
        let useracc = await inquirer.prompt([
            {
                type: "list",
                name: "acc_type",
                choices: ["Savings account", "Current Account"],
                message: "Select your Account"
            },
            {
                type: "list",
                name: "balance",
                message:"Select an option: ",
                choices: ["Deposit", "Withdraw", "Account Balance"]
            }
        ])
        
    switch(useracc.balance){
        case("Deposit"):{
            let Deposit = await inquirer.prompt([
            {
                type:'number',
                name: "deposit",
                message : "Enter amount",
            }
    ])
        let newbalance = Deposit.deposit + acc.Balance;
        console.log(`Your Acc Balance is ${acc.Balance}`);
        console.log(`Your Deposit Ammount is ${Deposit.deposit}`);
        console.log(`Your New Balance is ${newbalance}`);
        break;
    }
        
        case("Withdraw"):{
            let Withdrawal=await  inquirer.prompt({
                type:'number',
                name :"withdraw",
                message:"enter Amount"
        })
            if(acc.Balance < Withdrawal.withdraw){
                console.log('Insufficient balance');
            } else{
            let newbalance = acc.Balance - Withdrawal.withdraw;
            console.log(`Your Acc Balance is ${acc.Balance}`);
            console.log(`Your Withdrawal Ammount is ${Withdrawal.withdraw}`);
            console.log(`Your Remaining Balance is ${newbalance}`);
            break;                    
            }
    }
    
        case ("Account Balance"):
            console.log(`${acc.name}'s Current Balance Is ${acc.Balance}`);
            break;
    }

        } else{
        console.log("You Enter Wrong Pin.\nPlease Try Again.")
    }