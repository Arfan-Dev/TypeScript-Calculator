import inquirer from "inquirer";

import chalk from "chalk";

import chalkAnimation from "chalk-animation";

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);

    })
}

async function welcome(){
    let title=chalkAnimation.rainbow("Lets start calculation");
    await sleep();
    title.stop()
}

await welcome()

async function calculator(){
    let answers:{
    operators:string,
    num1:number,
    num2:number
} =await inquirer.prompt([
    {
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multipication", "Division"],
        message: "Select the operation do you want to perform"
    },
    {
        type: "number",
        name: "num1",
        message: "Enter first number: "
    },
    {
        type: "number",
        name: "num2",
        message: "Enter second number: "
    }
])
if(answers.operators==="Addition"){

    console.log("Answer: "+ (answers.num1+answers.num2));
    
}else if(answers.operators==="Subtraction"){
    console.log("Answer: "+ (answers.num1-answers.num2));
}else if(answers.operators==="Multipication"){
    console.log("Answer: "+ (answers.num1*answers.num2));
}else
    console.log("Answer: "+ (answers.num1/answers.num2));

}

// calculator()
async function startAgaing() {
    do {
   await calculator()
   var again= await inquirer.prompt([{
    type: "input",
    name: "restart",
    message: "Do you want to continue? Press y or n: "
   }]) 
} while (again.restart=="y" || again.restart=="yes" || again.restart=="Y" || again.restart=="YES");

}

startAgaing()