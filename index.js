#! /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    },
]);
let userFromCurrency = user_answer.from;
let userToCurrency = user_answer.to;
let fromAmount = Currency[userFromCurrency];
let toAmount = Currency[userToCurrency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`converted Amount = ${convertedAmount.toFixed(2)}`);
