'use strict';

let money, time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDailyBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed(2);
        alert("Daily budget: "+ appData.moneyPerDay );
    },
    checkSavings: function(){
        if( appData.savings == true ){
            let save = +prompt ("Enter savings amount:"),
                percent = +prompt ("Enter interest rate (%):");
            
            appData.monthIncome = save*percent/100/12;
            alert("Monthly income: " + appData.monthIncome.toFixed(2));
        }
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log("Low wealth level");
        } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay <= 200){
            console.log("Medium wealth level");
        } else if(appData.moneyPerDay > 200){
            console.log("High wealth level");
        }
    },
    chooseOptExpenses: function(){
        for(let i=1; i<=3; i++){
            let optionalExpensesName = prompt("Optional expenses:");
    
            appData.optionalExpenses[i] = optionalExpensesName;
        }
    },
    chooseIncome: function(){
        let items;
        while( !isNaN(items) || items==null || items=="" ){
            items = prompt("Which additional income do you have? (Comma-separated)");
        }
        appData.income = items.split(",");
        appData.income.push(prompt("Maybe somthing else?"));
        appData.income.sort();
            
        let message = "Ways to earn extra money: \n";
        appData.income.forEach(function(arrElem, i){ message = message + " "+ (1+i) + " " + arrElem + "\n";
        });
        alert(message);
    }

};


start();
appData.chooseIncome();

function start() {
    money=prompt("What is your monthly budget?");
    
    while(isNaN(money) || money == null || money == ""){
        money=prompt("What is your monthly budget?");
    }

    time=prompt("Please, enter date in YYYY-MM-DD format.");
}



//разные методы перебора свойств объектов
//let appData = {d:1, a:2};

for(let i in appData){
    console.log(i +" "+ appData[i]);
}

let keys = Object.keys(appData);
keys.forEach(i => 
    console.log(i + ": " + appData[i])
);

let values = Object.values(appData);
values.forEach(a => console.log(a));

let arr = Object.entries(appData);
arr.forEach(([i,a]) => {console.log(i + ": " + a);
});

let getResult = Object.getOwnPropertyNames(appData);
getResult.forEach(i => {console.log(i + ": " + appData[i]);
});