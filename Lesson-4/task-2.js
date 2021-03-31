/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. 
Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
*/

class Product {
    constructor(prodId, price) {
        this.prodId = prodId
        this.price = price
    }
    getPrice() {
        return this.price;
    }
    setPrice(newPrice) {
        this.price = newPrice;
        return this.price;
    }
}


class Basket {
    constructor(userId) {
        this.userId = userId;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calcTotal() {
        let result = 0;
        for (let i in this.products) {
            result += this.products[i].price;
        }
        return result;
    }
}

class Baskets {
    constructor() {
        this.items = [];
    }
    addBasket(basket) {
        this.items.push(basket);
    }
    getBusketByUserId(userId) {
        for (let i in this.items) {
            if (this.items[i].userId == userId) {
                return this.items[i];
            }
        }
        console.log('There is no user: ' + userId);
        return null;
    }
}


let bas1 = new Basket(1);
let prod1 = new Product(1, 123);
bas1.addProduct(prod1);
bas1.addProduct(new Product(2, 323));
console.log(bas1);
console.log(bas1.calcTotal());

let bas2 = new Basket(2);
bas2.addProduct(new Product(2, 323));
bas2.addProduct(new Product(5, 523));
console.log(bas2);
console.log(bas2.calcTotal());

baskets = new Baskets();
baskets.addBasket(bas1);
baskets.addBasket(bas2);
console.log(baskets);
console.log(baskets.getBusketByUserId(1)); // There is a user
console.log(baskets.getBusketByUserId(4)); // No such user
