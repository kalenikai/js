/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
*/

let arg1 = parseFloat(prompt('Please provide first value: '));
let arg2 = parseFloat(prompt('Please provide first value: '));
let op = (prompt('Please provide math op: '));
function mathOperation(arg1, arg2, op) {
    switch (op) {
        case '+':
            alert('Sum is :' + (arg1 + arg2));
            return;
        case '-':
            alert('Dif is :' + (arg1 - arg2));
            return;
        case '*':
            alert('Prod is :' + (arg1 * arg2));
            return;
        case '/':
            alert('Div is :' + (arg1 / arg2));
            return;
        case ':':
            alert('Div is :' + (arg1 / arg2));
            return;
        default:
            alert("Operation failure");
    }
}
mathOperation(arg1, arg2, op);

