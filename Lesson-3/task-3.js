/* 3. Товары в корзине хранятся в массиве. Задачи:
    a) Организовать такой массив для хранения товаров в корзине;    
    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
let baskets = [[]]; // 2D array
//Fill 3 baskets
baskets[0] = [1, 2, 44, 35]
baskets[1] = [3, 2]
baskets[2] = [3, 12, 4, 36, 67, 56]

function countBasketPrice(arr) {
    let result = 0;
    for (let i in arr) {
        result += arr[i];
    }
    return result;
}

console.log('Amount in the basket is: ' + countBasketPrice(baskets[0]));
