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


// for(let i=1; i<=2; i++){
    // let requiredCostName= prompt("Enter a required cost item this month"),
    //     requiredCostValue= +prompt("How much will it cost?") ;

    // if(typeof(requiredCostName) != 'string' || requiredCostName.length > 50 || typeof(requiredCostValue) != 'number' 
    // || requiredCostValue == '' || requiredCostName == ''){
    //     alert('Error! More then 50 symbols or empty'); 
    //     i--;
    // } else {
    //     appData.expenses[requiredCostName] = requiredCostValue;
    // }
    // i++;

    
// }

// let i=1; 
// while( i <= 2 ){
//     let requiredCostName= prompt("Enter a required cost item this month"),
//         requiredCostValue= +prompt("How much will it cost?") ;

//     if(typeof(requiredCostName) != 'string' || requiredCostName.length > 50 || typeof(requiredCostValue) != 'number' 
// || requiredCostValue == '' || requiredCostName == ''){
//         alert('Error! More then 50 symbols or empty'); 
//         i--;
//     } else {
//         appData.expenses[requiredCostName] = requiredCostValue;
//     }
//     i++;
// }


let i=1; 
do{
    let requiredCostName= prompt("Enter a required cost item this month"),
        requiredCostValue= +prompt("How much will it cost?") ;

    if(typeof(requiredCostName) != 'string' || requiredCostName.length > 50 || typeof(requiredCostValue) != 'number' ||
     requiredCostValue == '' || requiredCostName == ''){
        alert('Error! More then 50 symbols or empty'); 
        i--;
    } else {
        appData.expenses[requiredCostName] = requiredCostValue;
    }
    i++;
}
while( i <= 2 );


alert("Daily budget: "+ appData.budget/30);