import inquirer from "inquirer";
let loop = true;
async function confirm() {
    let confirm = await inquirer.prompt({
        name: "corfirm",
        type: "confirm",
        message: "Do you want to contine?"
    });
    //     if(confirm.corfirm === true){
    //     loop = true;
    //   }else
    //     loop = false
}
class Customer {
    constructor(fname, lname, gen, age, mobno) {
        this.Firstname = fname;
        this.LastName = lname;
        this.Gender = gen;
        this.Age = age;
        this.Mobileno = mobno;
    }
}
class BankAccount extends Customer {
    constructor(fname, lname, gen, age, mobno, bala) {
        super(fname, lname, gen, age, mobno);
        this.accountNo = "BHKL" + Math.floor(Math.random() * 100000000000);
        this.balance = bala;
    }
    Withdrawal(amount) {
        if (amount <= this.balance) {
            console.log(`Deposited Amount is ${amount}`);
            this.balance -= amount;
            return this.balance;
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    debitAmount(amount) {
        console.log(`Debited Amount is ${amount}`);
        this.balance += amount;
        console.log(`Now your Balance is ${this.balance}`);
        return this.balance;
    }
    CustomerInfo() {
        return ` \tName: ${this.Firstname} ${this.LastName}
        Age: ${this.Age}
        Gender: ${this.Gender}
        Mobile Number: ${this.Mobileno}
        Account Balance: ${this.balance}
        Account Number: ${this.accountNo}`;
    }
}
let asy = await inquirer.prompt([
    {
        type: 'input',
        name: 'firstname',
        message: "Enter your first name",
    },
    {
        type: 'input',
        name: 'lastname',
        message: "Enter your Last name",
    },
    {
        type: 'list',
        name: 'gender',
        message: "Select Your gender:",
        choices: ["Male", "Female"]
    },
    {
        type: 'input',
        name: 'age',
        message: `How old are you?`,
    },
    {
        type: "input",
        name: "number",
        message: `What's your phone Number? `
    },
    {
        name: "ibalance",
        type: "input",
        message: `Please enter the initial balance for your account `
    }
]);
let asd;
let c1 = new BankAccount(asy.firstname, asy.lastname, asy.gender, asy.age, asy.number, asy.ibalance);
console.log("Creating Account...");
// setTimeout(() => {
console.log("Verfifying Details...");
// }, 1000);
// setTimeout(() => {
console.log("Account Created");
console.log(c1.CustomerInfo());
// }, 2500);
await confirm();
const menu = await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'Menu',
    choices: ['Cash Withdrawal', 'Cash Deposit', "logout"]
});
switch (menu.choice) {
    case ('Cash Withdrawal'):
        {
            const withdrawl = await inquirer.prompt({
                type: "number",
                name: 'withdraw',
                message: 'Enter amount to withdraw?'
            });
            const result = await c1.Withdrawal(withdrawl.withdraw);
            console.log(`Remaining Balance: ${result}`);
            await confirm();
            break;
        }
        ;
    case ("Cash Deposit"): {
        let de = await inquirer.prompt({
            type: "number",
            name: "amount",
            message: `Enter amount to be deposited?`
        });
        c1.debitAmount(de.amount);
        await confirm();
        break;
    }
    case ("Logout"): {
        confirm();
        break;
    }
}
