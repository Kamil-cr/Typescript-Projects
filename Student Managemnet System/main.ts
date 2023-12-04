#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
import { Student } from "./studentid.js";
import { Instructor } from "./studentid.js";
import { Course } from "./studentid.js";
import { Department } from "./studentid.js";
import { addstudent } from "./studentid.js";

console.log(chalk.bold.rgb(204, 204, 204)(`\n   <<<===========================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=======>>>  ${chalk.redBright.bold('STUDENT MANAGEMENT SYSTEM')}  <<<=======>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`   <<<===========================================>>>\n`));let loop = true;

async function confirm() {
  let confirm = await inquirer.prompt({
    name: "corfirm",
    type: "confirm",
    message: "Do you want to continue?"
  })

  if(confirm.corfirm === true){
  loop = true;
}else
  loop = false
}

async function IndividualChoice(val: string, ...options: string[]) {
  const input = await inquirer.prompt([{
      name: 'choice',
      message: `${val} Options`,
      type: 'rawlist',
      choices: options,
  }])
  let value: string = await input['choice']
  return value
}

while(loop){
let start = await inquirer.prompt([
    {
      type:"list",
      message : 'What do you want to do',
      name:'choice',
      choices:['Student',"Teacher","Department"]
    }
])

async function MakeChoice() {
  const input = await inquirer.prompt([{
      name: 'choice',
      message: "Select One",
      type: 'rawlist',
      choices: ["Student", "Teacher", "Course"]
  }])
  let value: string = await input['choice']

  if(value == "Student"){
    // Students Menu
    const option = await IndividualChoice("Student", "Add a student", "View students")
    if (option == "Add a student") {
      addstudent()
  }
}
}
// switch (start.choice) {
//   case "Student":
//   const smenu=await inquirer.prompt([
//     {
//       type :"list",
//       name:"smenu1",
//       message:"Select an option:",
//       choices:[
//         "Add a new student number.",
//         "Enroll Student in course",
//         "View all student"]
//       }]);
    
//     if(smenu.smenu1 === "Add a new student number."){
//     const studenntinfo = await inquirer.prompt([{
//       type: "input",
//       name: "firstName",
//       message: "Enter the first Name of your student"
//     },
//     {
//       type: "number",
//       name: "age",
//       message: "Enter age of your student "
//     }])
//     let sdt = new Student(studenntinfo.firstName,studenntinfo.age)
//     sdt.getname()
//     console.log(sdt);
//     await confirm();
//     } else if(smenu.smenu1 === "Delete a specific student by their ID."){

//     }
//   break;
//   default:
//     break;
// }

}