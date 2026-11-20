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

// income - balance - amount

const totalBalanceAmount = document.getElementById('total-balance-amount');

let totalIncome = 0;
let totalExpenses = 0;
let balance = 0;

// let balance = 0;

let usersArray = JSON.parse(localStorage.getItem('usersList')) || [];

addTransactionBtn.addEventListener('click', function () {


    const transactionAmount = Number(amount.value);




    console.log(date.value)
    console.log(type.value);
    console.log(paymentMethod.value)
    console.log(category.value)
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

    console.log(newUser)



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


    console.log(addTransaction.value);


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

    usersArray.forEach(function (transaction) {

        if (transaction.type === "Income") {
            totalIncome += Number(transaction.amount);
        }

        if (transaction.type === "Expense") {
            totalExpenses += Number(transaction.amount);
        }

    });

    balance = totalIncome - totalExpenses;

    incomeAmount.textContent = `$ ${totalIncome.toFixed(2)}`;

    expenseAmount.textContent = `$ ${totalExpenses.toFixed(2)}`;

    totalBalanceAmount.textContent = `$ ${balance.toFixed(2)}`;

}

calculateBalance();