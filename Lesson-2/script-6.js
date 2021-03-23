/*
8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/
function power(val, pow) {
    if (!pow)
        return 1;
    if (pow != 1 & pow < 0) {
        return (1 / val) / power(1 / val, ++pow);
    } else if (pow != 1 & pow > 0) {
        return val * power(val, --pow);
    } else
        return val;
}

console.log(power(2, 4));
console.log(power(2, 0));
console.log(power(2, -4));
