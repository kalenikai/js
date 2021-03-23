/*
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

let a = parseFloat(prompt('Provide value for "a": '));
let b = parseFloat(prompt('Provide value for "b": '));
if (a >= 0 & b >= 0) {
    alert('Difference is :' + (a - b));
} else if (a < 0 & b < 0) {
    alert('Product is :' + (a * b));
} else if (a * b < 0) {
    alert('Sum is :' + (a + b));
}
