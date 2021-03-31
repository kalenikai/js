/*
1. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
const Digits = {
    ones: NaN,
    tens: NaN,
    hundreds: NaN
}

function cast2digits(number) {
    let Digits = {};
    if (number > 999) {
        console.log('Value should not more than 999');
        return Digits;
    }
    let temp_number = String(number);
    Digits.ones = parseInt(temp_number.substring(2, 3));
    Digits.tens = parseInt(temp_number.substring(1, 2));
    Digits.hundreds = parseInt(temp_number.substring(0, 1));
    return Digits;
}
let val = cast2digits(134)
console.log(val);

val = cast2digits(1000)
console.log(val);

