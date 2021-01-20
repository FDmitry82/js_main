//const $cart = document.querySelector('#cart');

let idCounter = 0;

const cart = {
    goodsList: [],

    createOrder() {
        this.goodsList.push(new Order());
    },

    add(orderId, good) {
        const order = this.goodsList.find(function(order) {
            return order.id == orderId;
        });

        order.add(good);
    },

    getPrice() {
        return this.goodsList.reduce(function (acc, order) {
            return  acc + order.getPrice();
        }, 0);
    } 
}

function Good(title, price, quantity = 1) {
    this.name = title;
    this.price = price;
    this.quantity = quantity
}

function Order(goods = []) {
    this.goodsList = goods;
    this.id = idCounter++;

    this.add = function(good) {
        this.goodsList.push(good);
    }

    this.getPrice = function() {
        return this.goodsList.reduce(function (acc, good) {
            return  acc + (good.price * good.quantity);
        }, 0);
    } 
}


cart.createOrder();
cart.createOrder();
cart.createOrder();

cart.add(1, new Good('Молоко', 25));
cart.add(2, new Good('Яйца', 12));

console.log(cart.getPrice());
// function getPrice(arr) {
//     return arr.reduce(function (acc, good) {
//         return  acc + (good.price * good.quantity);
//     }, 0);
// }

// function getQuantity(arr) {
//     return arr.reduce(function (acc, good) {
//         return  acc + good.quantity;
//     }, 0);
// }

// function drawCart() {
//     const p = document.createElement('p');

//     if(cart.length !== 0) {
//         p.textContent = 'в корзине ' + getQuantity(cart) + ' товаров, на сумму ' + getPrice(cart) + ' рублей';
//     } else {
//         p.textContent = 'корзина пуста'
//     }
    
//     $cart.appendChild(p);
// }


// cart.push(new Good('Хлеб', 20, 5));
// cart.push(new Good('Молоко', 40, 2));

// drawCart();

// console.log(getPrice(cart))