'use strict';

let money=prompt("What is your monthly budget?"),
    time=prompt("Please, enter date in YYYY-MM-DD format.");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(money);
console.log(time);

let requiredCostName= prompt("Enter a required cost item this month"),
    requiredCostValue= prompt("How much will it cost?") ;

appData.expenses[requiredCostName] = requiredCostValue;
console.log(appData.expenses[requiredCostName]);

alert("Daily budget: "+ appData.budget/30);