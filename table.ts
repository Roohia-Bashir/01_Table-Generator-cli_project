#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green.bold("welcome to table generating project"));

let myTable = true;
// our full code will be within while loop
while(myTable){

    let myInput = await inquirer.prompt({
        type: 'number',
        name: 'num',
        message: 'Enter your Number'
    })
    let myNumber = myInput.num;
    console.log(chalk.yellow(myNumber));

    if(myNumber){
        console.log(chalk.magenta(`Here is the table of ${myNumber}\n`));

        for(let i = 1; i <= 10; i++){
            console.log(chalk.gray.underline(`${myNumber} x ${i} = ${myNumber * i }`));
            
        }
    }else{
        console.log(chalk.red(`Enter a input in numerical form`));
    
     }   

    // asking user if he/she wants to print table again.

    let againPrint = await inquirer.prompt({
        type: 'confirm',
        name: 'askUser',
        message: 'Do you want to print another Table?',
        default: false
    });

    if(againPrint.askUser == false){
        myTable = false;
        console.log(chalk.cyan(`\n Thank you for using this project!`));
    }
}