const addTransaction = document.getElementById('Description');
const addTransactionBtn = document.getElementById('add-transaction-btn');
const amount = document.getElementById('Amount');
const type = document.getElementById('Type');
// console.log(type.value);
const category = document.getElementById('Category');
const date = document.getElementById('Date');
const paymentMethod = document.getElementById('payment-method');
const incomeAmount = document.getElementById('income-balance-amount');
const expenseAmount = document.getElementById('expense-balance-amount');
const incomeStatistics = document.getElementById('income-statistics');
const expenseStatistics = document.getElementById('expense-statistics');
const totalStatistics = document.getElementById('total-statistics');
const averageExpense = document.getElementById('average-expense');
const setBudgetBtn = document.getElementById('set-budget');
const highestExpense = document.getElementById('highestExpense-amount');
const lowestExpense = document.getElementById('lowestExpense-amount');
const transactionListData = document.getElementById('transaction-list-data');
const totalBalanceAmount = document.getElementById('total-balance-amount');
const remainingBudget = document.getElementById('remaining-budget');
const monthlyBalanceAmount = document.getElementById('monthly-balance-amount');
const spentBudget = document.getElementById('spent-budget');



let totalIncome = 0;
let totalExpenses = 0;

let totalIncomeNumber = 0;
let totalExpensesNumber = 0;
let averageExpenseValue = 0;

let numberTotalExpense = 0;

let highestExpenseValue = null;;
let lowestExpenseValue
    = null;;

let totalTransactions = 0;

// let balance = 0;
let budget;
let remaingingBudget;

let usersArray = JSON.parse(localStorage.getItem('usersList')) || [];

setBudgetBtn.addEventListener('click', function () {

    budget = prompt("Enter your monthly budget")


    remaingingBudget = budget - totalExpenses.toFixed(2);
    alert("Hello, " + budget);
    if (budget !== "") {
        remainingBudget.textContent = `$${remaingingBudget}`;
        monthlyBalanceAmount.textContent = `$${budget}`;
    }
});

addTransactionBtn.addEventListener('click', function () {




    const transactionAmount = Number(amount.value);

    // console.log(date.value)
    // console.log(type.value);
    // console.log(paymentMethod.value)
    // console.log(category.value)
    if (addTransaction.value === "") {
        console.log("Please Enter the correct transaction description")
        return;
    }
    if (amount.value === "") {
        console.log("Please Enter the correct transaction amount")
        return;
    }

    if (date.value === "") {
        console.log("Please Enter the correct transaction date")
        return;
    }

    let balance = amount

    const newUser = {
        addTransaction: addTransaction.value,
        date: date.value,
        category: category.value,
        amount: Number(amount.value),
        paymentMethod: paymentMethod.value,
        type: type.value
    };

    // console.log(newUser)



    usersArray.push(newUser);
    localStorage.setItem('usersList', JSON.stringify(usersArray));

    calculateBalance();

    // if (type.value === "Income") {
    //     incomeAmount.textContent = `$ ${amount.value}`
    //     incomeStatistics.textContent = `$ ${amount.value}`


    // }

    // if (type.value === "Expense") {
    //     incomeAmount.value = 0;
    //     expenseStatistics.textContent = `$ ${amount.value}`
    //     expenseAmount.textContent = `$ ${amount.value}`


    //     // balance =  amount.value

    // }


    // usersArray.map((users) => {
    //     transactionListData.textContent

    // })

    // console.log(addTransaction.value);

    addTransaction.value = "";
    amount.value = "";
    // date.value = Date.now();


    // itemsArray.push(addTransaction.value);
    // itemsArray.push(amount.value);
    // itemsArray.push(type.value);
    // itemsArray.push(paymentMethod.value);
    // itemsArray.push(category.value);
    // itemsArray.push(date.value)
    // localStorage.setItem('myItems', JSON.stringify(itemsArray));


})

function calculateBalance() {

    totalIncome = 0;
    totalExpenses = 0;
    averageExpenseValue = 0;
    numberTotalExpense = 0;


    usersArray.forEach(function (transaction) {
        console.log(transaction)

        if (transaction.type === "Income") {
            totalIncome += Number(transaction.amount);
            totalIncomeNumber++;


        }

        if (transaction.type === "Expense") {
            totalExpenses += Number(transaction.amount);
            totalExpensesNumber++;
            numberTotalExpense++;
            if (highestExpenseValue === null || transaction.amount > highestExpenseValue) {
                highestExpenseValue = transaction.amount;
            }
            if (lowestExpenseValue === null || transaction.amount < lowestExpenseValue) {
                lowestExpenseValue = transaction.amount;
            }
        }



    });

    console.log("hello")

    console.log(highestExpenseValue);

    // console.log(usersArray);
    // console.log(totalExpenses);
    averageExpenseValue = Number(totalExpenses) / Number(numberTotalExpense);



    console.log(`average ${averageExpenseValue}`);
    console.log(numberTotalExpense);

    balance = totalIncome - totalExpenses;

    totalTransactions = Math.abs(totalIncomeNumber + totalExpensesNumber);

    spentBudget.textContent = ` $${totalExpenses.toFixed(2)}`;

    incomeAmount.textContent = `$ ${totalIncome.toFixed(2)}`;
    incomeStatistics.textContent = `$ ${totalIncomeNumber}`

    expenseAmount.textContent = `$ ${totalExpenses.toFixed(2)}`;
    expenseStatistics.textContent = `$ ${totalExpensesNumber}`;

    totalBalanceAmount.textContent = `$ ${balance.toFixed(2)}`;
    totalStatistics.textContent = `$ ${totalTransactions}`;
    // if (averageExpense === NaN) {
    //     averageExpense = "$0.00"

    // }

    averageExpense.textContent = `$ ${Number(averageExpenseValue)}`
    if (highestExpense || lowestExpense === null) {
        highestExpense.textContent = "$0.00"
        lowestExpense.textContent = "$0.00"

    }
    highestExpense.textContent = `$ ${highestExpenseValue}`
    lowestExpense.textContent = `$ ${lowestExpenseValue}`


}

calculateBalance();