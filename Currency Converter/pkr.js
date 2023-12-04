import { pkrcurrency } from "./main.js";
function pkrconvert(currency1, currency2, value) {
    currency1 == "PKR";
    if (currency2 === "AFN") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1PKR = ${pkrcurrency.AFN}`);
        let ans1 = value * pkrcurrency.AFN;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "USD") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1PKR = ${pkrcurrency.USD}`);
        let ans1 = value * pkrcurrency.USD;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "AED") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1PKR = ${pkrcurrency.AED}`);
        let ans1 = value * pkrcurrency.AED;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "INR") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1PKR = ${pkrcurrency.INR}`);
        let ans1 = value * pkrcurrency.INR;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
    else if (currency2 === "PKR") {
        console.log(`You have ${value}${currency1}`);
        console.log(`Converting from ${currency1} to ${currency2}`);
        console.log(`1PKR = ${pkrcurrency.PKR}`);
        let ans1 = value * pkrcurrency.PKR;
        console.log(`${value}${currency1} = ${ans1} ${currency2}`);
    }
}
export { pkrconvert };
