/*
 7. *Сравнить null и 0. Попробуйте объяснить результат.
*/

let zeroVal = 0;
let nullVal1 = null;
let nullVal2 = null;

if (zeroVal == null) {
    console.log('zeroVal == null');
} else {
    console.log('zeroVal != null'); // 0 не равно null
}
if (nullVal1 == nullVal2) {
    console.log('nullVal1 == nullVal2'); // но null и null можно сравнивать
}
if (zeroVal === null) {
    console.log('zeroVal === null')
}


if (zeroVal) {
    console.log('zeroVal is true')
} else {
    console.log('zeroVal is false') // О это ложь
}
if (nullVal1) {
    console.log('nullVal1 is true')
} else {
    console.log('nullVal1 is false') // null это ложь
}
