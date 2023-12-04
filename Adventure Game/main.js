import inquirer from "inquirer";
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamage = 25;
let Health = 100;
let attackDamages = 50;
let numHealthPotions = 5;
let HealthPotionHealAmount = 30;
let HealthPotionDropChance = 50;
let running = true;
console.log("\tWelcome to Dungeon!");
GAME: while (running) {
    console.log("----------------------------------------");
    let enemyHealth = Math.floor(Math.random() * (maxEnemyHealth + 1)) + 0;
    let enemy = enemies[Math.floor(Math.random() * (enemies.length + 1)) + 0];
    console.log(`\t ${enemy} appeared! \n`);
    while (enemyHealth > 0) {
        console.log("\t Your Hp: " + Health);
        console.log(`\t ${enemy}'s Hp is: ${enemyHealth}\n`);
        const option = await inquirer.prompt({
            type: "list",
            name: 'option1',
            message: "\t What do you want to do?",
            choices: ["\t Attack", "\t Heal", "\t Run"]
        });
        if (option.option1 === "\t Attack") {
            let damagedealt = Math.floor(Math.random() * (attackDamages + 1));
            let damagetaken = Math.floor(Math.random() * (enemyAttackDamage + 1));
            enemyHealth -= damagedealt;
            Health -= damagetaken;
            console.log(`\t You Strike the ${enemy} for ${damagedealt} damage.`);
            console.log(`\t You recieve ${damagetaken} in retaliation`);
            if (Health < 1) {
                console.log("\t You Have Taken Too much Damage, You are too weak to go on!");
                break;
            }
        }
        else if (option.option1 === "\t Heal") {
            if (numHealthPotions > 0) {
                Health += HealthPotionHealAmount;
                numHealthPotions--;
                console.log(`\t You drink a health portion, Healing yourself for ${HealthPotionHealAmount}.\n\t You now have ${Health}HP.\n\t You have ${numHealthPotions} Health portion left.\n`);
            }
            else {
                console.log(`\t You have no Health portion left! Defeat enemies for a chance to get one!\n`);
            }
        }
        else if (option.option1 === "\t Run") {
            console.log(`\t You run away from the ${enemy}!`);
            continue GAME;
        }
        else {
            console.log("Invalid Command!");
        }
        if (Health < 1) {
            console.log("You limp out from the dungeon, weak from the battle");
            break;
        }
    }
    console.log("----------------------------------------");
    console.log(` # ${enemy} was defeated! #`);
    console.log(` # You have ${Health}HP left. #`);
    if (Math.floor(Math.random() * (100 + 1)) < HealthPotionDropChance) {
        numHealthPotions++;
        console.log(` # The ${enemy} dropped a health portion! # `);
        console.log(` # You now have ${numHealthPotions} health portions. # `);
    }
    console.log("----------------------------------------");
    console.log("What would you like to do now?");
    const opt = await inquirer.prompt({
        type: "list",
        name: "hi",
        message: "Choose an option: ",
        choices: ["Continue Fighting", "Exit Dungeon"]
    });
    while (opt.hi != "Continue Fighting" && opt.hi != "Exit Dungeon") {
        console.log("Invalid Command!");
        const opt = await inquirer.prompt({
            type: "list",
            name: "hi",
            message: "Choose an option: ",
            choices: ["Continue Fighting", "Exit Dungeon"]
        });
    }
    if (opt.hi === "Continue Fighting") {
        console.log("You continue on your adventure");
    }
    else if (opt.hi === "Exit Dungeon") {
        console.log("You exit the dungeon, successful from your adventure");
        running = false;
    }
}
console.log(" #########################");
console.log(" # Thanks for playing! #");
console.log(" #########################");
