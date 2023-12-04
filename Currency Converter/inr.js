import { inrcurrency } from "./main.js";
function inrconvert(currency1, currency2, value) {
    currency1 == "AFN";
    if (currency2 === "USD") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${inrcurrency.USD}`);
        let ans1 = value * inrcurrency.USD;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "AED") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${inrcurrency.AED}`);
        let ans1 = value * inrcurrency.AED;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "PKR") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${inrcurrency.PKR}`);
        let ans1 = value * inrcurrency.PKR;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "AFN") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${inrcurrency.AFN}`);
        let ans1 = value * inrcurrency.AFN;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "INR") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1${currency1} = ${inrcurrency.INR}`);
        let ans1 = value * inrcurrency.INR;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
}
export { inrconvert };
