// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 1;
let src = [];
let res = [];
// Form odd number array
while (i < 50) {
    src.push(2 * i + 1);
    i++;
}
i = src.length - 1;
while (i >= 0) {
    let j = 0;
    let simple = true;
    while (j < i - 1) {
        if (!(src[i] % src[j])) {
            simple = false;
            break;
        }
        j++;
    }
    if (simple) {
        res.push(src[i]);
    }
    i--;
}
console.log(res);
