const expenses = [];

const pushExpenseNode = document.querySelector('.js-input__btn');
const inputExpenseNode = document.querySelector('.js-input__expens');
const historyNode = document.querySelector('.js-history');

pushExpenseNode.addEventListener('click', function () {
    //1. проверяем наличие значения в поле ввода
    if (inputExpenseNode.value === '') { // или !inputExpenseNode.value
        return;
    }

    //2. делаем строку числом
    const expense = parseInt(inputExpenseNode.value)

    //3. после нажатия обнуляем поля ввода
    inputExpenseNode.value = '';

    //4. добавляем значение в массив
    expenses.push(expense);

    let expensesListHTML = '';

    expenses.forEach(element => {
        const elementHTML = `<li class = 'historyElement'>${element}</li>`;
        expensesListHTML += elementHTML;
    });

    historyNode.innerHTML = `<ol class='expenesHistoryList'>${expensesListHTML}</ol>`;
})
