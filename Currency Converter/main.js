#!/usr/bin/env node
import inquirer from "inquirer";
import { pkrconvert } from "./pkr.js";
import { aedconvert } from "./aed.js";
import { inrconvert } from "./inr.js";
import { usdconvert } from "./usd.js";
import { afnconvert } from "./afn.js";
let pkrcurrency = {
    "PKR": 1,
    "AFN": 0.27,
    "USD": 0.0034,
    "AED": 0.012,
    "INR": 0.28
};
let afncurrency = {
    "PKR": 3.76,
    "AFN": 1,
    "USD": 0.013,
    "AED": 0.047,
    "INR": 1.05
};
let usdcurrency = {
    "PKR": 296,
    "AFN": 78.93,
    "USD": 1,
    "AED": 3.67,
    "INR": 83.09
};
let aedcurrency = {
    "PKR": 80.87,
    "AFN": 1.49,
    "USD": 0.27,
    "AED": 1,
    "INR": 22.62
};
let inrcurrency = {
    "PKR": 3.57,
    "AFN": 0.95,
    "USD": 0.012,
    "AED": 0.044,
    "INR": 1
};
let loop = true;
async function confirm() {
    let conirsm = await inquirer.prompt({
        type: 'confirm',
        name: 'conirm',
        message: "Do you want to continue?"
    });
    if (conirsm.conirm == true)
        loop = true;
    else
        loop = false;
}
while (loop) {
    let answwer = await inquirer.prompt([
        {
            type: "list",
            name: 'from',
            message: `From which Currency you want to convert?`,
            choices: ["PKR", "USD", "AED", "AFN", "INR"],
        },
        {
            type: "input",
            name: 'convert',
            message: `How much ${['from']} do you have? `
        },
        {
            type: "list",
            name: 'to',
            message: `To what currency would like to convert your money? `,
            choices: ["PKR", "USD", "AED", "AFN", "INR"]
        }
    ]);
    if (answwer.from === "PKR") {
        pkrconvert(answwer.from, answwer.to, answwer.convert);
    }
    else if (answwer.from === "AED") {
        aedconvert(answwer.from, answwer.to, answwer.convert);
    }
    else if (answwer.from === "INR") {
        inrconvert(answwer.from, answwer.to, answwer.convert);
    }
    else if (answwer.from === "AFN") {
        afnconvert(answwer.from, answwer.to, answwer.convert);
    }
    else if (answwer.from === "USD") {
        usdconvert(answwer.from, answwer.to, answwer.convert);
    }
    await confirm();
}
export { pkrcurrency };
export { inrcurrency };
export { afncurrency };
export { aedcurrency };
export { usdcurrency };