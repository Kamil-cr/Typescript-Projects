import { afncurrency } from "./main.js";


function afnconvert(currency1:string, currency2:string, value:number){
    currency1 == "AFN";
        if (currency2 ==="USD") {
            console.log(`You have ${value}${currency1}`);
            console.log(`Converting from ${currency1} to ${currency2}`);
            console.log(`1${currency1} = ${afncurrency.USD}`)
            let ans1 = value * afncurrency.USD;
            console.log(`${value}${currency1} = ${ans1} ${currency2}`)
        }
        else if (currency2==="AED"){
            console.log(`You have ${value}${currency1}`);
            console.log(`Converting from ${currency1} to ${currency2}`);
            console.log(`1${currency1} = ${afncurrency.AED}`)
            let ans1 = value * afncurrency.AED;
            console.log(`${value}${currency1} = ${ans1} ${currency2}`)
        }
        else if (currency2=== "PKR") {
            console.log(`You have ${value}${currency1}`);
            console.log(`Converting from ${currency1} to ${currency2}`);
            console.log(`1${currency1} = ${afncurrency.PKR}`)
            let ans1 = value * afncurrency.PKR;
            console.log(`${value}${currency1} = ${ans1} ${currency2}`)
        }
        else if (currency2==="INR") {
            console.log(`You have ${value}${currency1}`);
            console.log(`Converting from ${currency1} to ${currency2}`);
            console.log(`1${currency1} = ${afncurrency.INR}`)
            let ans1 = value * afncurrency.INR;
            console.log(`${value}${currency1} = ${ans1} ${currency2}`)
        }
        else if (currency2 === "AFN"){
            console.log(`You have ${value}${currency1}`);
            console.log(`Converting from ${currency1} to ${currency2}`);
            console.log(`1${currency1} = ${afncurrency.AFN}`)
            let ans1 = value * afncurrency.AFN;
            console.log(`${value}${currency1} = ${ans1} ${currency2}`)
        }
    }
    export {afnconvert}
    