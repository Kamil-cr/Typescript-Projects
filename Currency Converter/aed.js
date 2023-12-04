import { aedcurrency } from "./main.js";
function aedconvert(currency1, currency2, value) {
    currency1 == "AED";
    if (currency2 === "AFN") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${aedcurrency.AFN}`);
        let ans1 = value * aedcurrency.AFN;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "USD") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${aedcurrency.USD}`);
        let ans1 = value * aedcurrency.USD;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "PKR") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${aedcurrency.PKR}`);
        let ans1 = value * aedcurrency.PKR;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "INR") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${aedcurrency.INR}`);
        let ans1 = value * aedcurrency.INR;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "AED") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${aedcurrency.AED}`);
        let ans1 = value * aedcurrency.AED;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
}
export { aedconvert };
