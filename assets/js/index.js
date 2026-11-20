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

// income - balance - amount



let balance = 0;

let usersArray = JSON.parse(localStorage.getItem('myItems')) || [];

addTransactionBtn.addEventListener('click', function () {




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

    const newUser = {
        addTransaction: addTransaction.value,
        date: date.value,
        category: category.value,
        amount: amount.value,
        paymentMethod: paymentMethod.value,
    };

    console.log(newUser)

    usersArray.push(newUser);
    localStorage.setItem('usersList', JSON.stringify(usersArray));

    if (type.value === "Income") {
        incomeAmount.textContent = `$ ${amount.value}`

    }

    if (type.value === "Expense") {
        incomeAmount.value = 0;
        expenseAmount.textContent = `$ ${amount.value}`

        // balance =  amount.value

    }


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

