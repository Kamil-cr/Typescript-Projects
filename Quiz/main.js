import inquirer from "inquirer";
import chalk from "chalk";
let a = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "What's your name? "
});
const apilink = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";
let fetchdata = async (data) => {
    let fethquiz = await fetch(data);
    let quizjson = await fethquiz.json();
    return quizjson.results;
};
let data = await fetchdata(apilink);
let startQuiz = async () => {
    console.log("\n\t\t\tWelcome to the Quiz!\n");
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let question = data[i].question;
        let ans = [...data[i].incorrect_answers].concat(data[i].correct_answer);
        let answer = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: data[i].question,
            choices: ans.map((val) => val)
        });
        if (data[i].correct_answer == answer.choice) {
            console.log(chalk.green('Correct Answer'));
            score += 1;
        }
        else {
            console.log(chalk.redBright("Wrong Answer"));
        }
    }
    console.log(`Your Score is :${score}/5`);
};
startQuiz();
