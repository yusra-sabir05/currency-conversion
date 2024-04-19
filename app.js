#! /usr/bin/env node
import inquirer from "inquirer";
const allCurrencies = {
    EUR: 1, // actual amount and rest of the amounts are equall to 1 euro 
    PKR: 297,
    AFN: 77,
    AUD: 1.66,
    BHD: 0.40,
    INR: 89,
    KWD: 0.33,
    NZD: 1.80,
    OMR: 0.41,
    QAR: 3.88,
    TRY: 34.62,
    AED: 3.92,
    USD: 1.06,
    SAR: 3.99,
};
let userInput = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Enter from currency",
        choices: ["EUR", "PKR", "AFN", "AUD", "BHD", "INR", "KWD", "NZD", "OMR", "QAR", "TRY", "AED", "USD", "SAR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Enter to currency",
        choices: ["EUR", "PKR", "AFN", "AUD", "BHD", "INR", "KWD", "NZD", "OMR", "QAR", "TRY", "AED", "USD", "SAR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount",
    }
]);
let fromCurrency = allCurrencies[userInput.from_currency];
let toCurrency = allCurrencies[userInput.to_currency];
// let useramount=userInput.amount
// let actualamount=useramount/fromCurrency
// let convertedamount=actualamount*toCurrency
// console.log(convertedamount.toFixed(0));
let useramount = userInput.amount;
if (!useramount) {
    console.log("Please enter the amount.");
}
else {
    let actualamount = useramount / fromCurrency;
    let convertedamount = actualamount * toCurrency;
    console.log(convertedamount.toFixed(0));
}
