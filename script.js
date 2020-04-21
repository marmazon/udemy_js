'use strict';

let money, time;

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


chooseExpenses();
detectDailyBudget();
checkSavings();
detectLevel();


function start() {
    money=prompt("What is your monthly budget?");
    
    while(isNaN(money) || money == null || money == ""){
        money=prompt("What is your monthly budget?");
    }

    time=prompt("Please, enter date in YYYY-MM-DD format.");
}





function chooseExpenses() {
    for(let i=1; i<=2; i++){
        let requiredExpenseName= prompt("Enter a required expense this month"),
            requiredExpenseValue= +prompt("How much will it?") ;

        if( !isNaN(requiredExpenseName) || requiredExpenseName.length > 50 || isNaN(requiredExpenseValue) || 
        requiredExpenseValue == '' || requiredExpenseName == ''){
            alert('Error! More then 50 symbols or empty'); 
            i--;
        } else {
            appData.expenses[requiredExpenseName] = requiredExpenseValue;
        }

    }
}



function checkSavings(){
    if( appData.savings == true ){
        let save = +prompt ("Enter savings amount:"),
            percent = +prompt ("Enter interest rate (%):");
        
        appData.monthIncome = save*percent/100/12;
        alert("Monthly income: " + appData.monthIncome.toFixed(2));
    }
}

function detectDailyBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed(2)
    alert("Daily budget: "+ appData.moneyPerDay );
}

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Low wealth level")
    } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay <= 200)
    {
        console.log("Medium wealth level")
    } else if(appData.moneyPerDay > 200){
        console.log("High wealth level")
    }

}