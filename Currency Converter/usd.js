import { usdcurrency } from "./main.js";
function usdconvert(currency1, currency2, value) {
    currency1 == "USD";
    if (currency2 === "AFN") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${usdcurrency.AFN}`);
        let ans1 = value * usdcurrency.AFN;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "AED") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${usdcurrency.AED}`);
        let ans1 = value * usdcurrency.AED;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "PKR") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${usdcurrency.PKR}`);
        let ans1 = value * usdcurrency.PKR;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "INR") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${usdcurrency.INR}`);
        let ans1 = value * usdcurrency.INR;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "USD") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${usdcurrency.USD}`);
        let ans1 = value * usdcurrency.USD;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
}
export { usdconvert };
