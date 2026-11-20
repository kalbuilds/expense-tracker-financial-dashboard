const addTransaction = document.getElementById('Description');
const addTransactionBtn = document.getElementById('add-transaction-btn');
const amount = document.getElementById('Amount');

const type = document.getElementById('Type');
// console.log(type.value);

const category = document.getElementById('Category');


const date = document.getElementById('Date');


const paymentMethod = document.getElementById('payment-method');





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

    console.log(addTransaction.value);

})