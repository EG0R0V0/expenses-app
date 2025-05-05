const LIMIT = 10000;
const expenses = [];

const pushExpenseNode = document.querySelector('.js-input__btn');
const inputExpenseNode = document.querySelector('.js-input__expens');
const historyNode = document.querySelector('.js-history');
const sumNode = document.querySelector('.js-sum');
const limitNode = document.querySelector('.js-limit');
const statusNode = document.querySelector('.js-status');

limitNode.innerText = LIMIT;

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
        const elementHTML = `<li class = 'historyElement'>${element} руб.</li>`;
        expensesListHTML += elementHTML;
    });

    historyNode.innerHTML = `<ol class='expenesHistoryList'>${expensesListHTML}</ol>`;

    //5. производится подсчет суммы трат
    let sum = 0;
    expenses.forEach(element => {
        sum += element;
    });
    sumNode.innerText = sum;

    //6. проверяем выход за предел лимита
    if (sum <= LIMIT) {
        statusNode.innerText = 'Все хорошо!';
    } else {
        statusNode.innerText = 'Все плохо!';
    }
})
