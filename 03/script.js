/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 */

/* Функция на проверку простого числа, для поиска воспользуемся циклом for 
далее передаем функцию с циклом while для проверки на true false */
const checkSimpleNum = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

/* Функция на проверку на true false */
const simpleNumArray = (num) => {
  const arr = [];
  let i = 2;
  while (i <= num) {
    if (checkSimpleNum(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr;
};

console.log('Вывод массива простых чисел от 0 до 100: ' + simpleNumArray(100));


/* 2. Начиная с этого урока, мы начинаем работать с функционалом интернет-магазина.
Предположим, что у нас есть сущность корзины. Нужно реализовать функционал подсчета
стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в
массиве.
2.1. Организуйте такой массив для хранения товаров в корзине
2.2. Организуйте функцию countBasketPrice, которая будет считать стоимость корзины. */

const basketItems = ['Стол', 'Стул', 'Ваза', 'Телевизор', 'Ноутбук'];
const ItemsCost = [['Стол', 20], ['Стул', 8], ['Ваза', 3], ['Телевизор', 35], ['Ноутбук', 45]];

// Функция возврата стоимости конкретного товара.
const getItemPrice = (item, array) => {
  const items = [];
  const costs = [];
  // Предполагаем, что нам известна структура массива со стоимостями товара, поэтому разбиваем на 2 одномерных массива
  for (let i = 0; i < array.length; i++) {
    items.push(array[i][0]);
    costs.push(array[i][1]);
  }
// используя метод .indexOf получаем индекс товара в массиве с названиями товаров и возвращаем стоимость по этому индексу из массива цен
  return costs[items.indexOf(item)];
};

const countBasketPrice = (basketArr, costArr) => {
  let totalCost = 0;
  for (let i = 0; i < basketArr.length; i++) {
// на каждой итерации обхода массива корзины обращаемся к функции получения стоимости единицы товара.
    totalCost += getItemPrice(basketArr[i], costArr);
  }
  return totalCost;
};
console.log('Массив товаров: ' + basketItems);
console.log('Массив стоимости товаров: ' + ItemsCost);
console.log('Стоимости всех товаров в корзине: ' + countBasketPrice(basketItems, ItemsCost));

/* 3. *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. То есть
выглядеть должно вот так: for(…){// здесь пусто} */

for (let i = 0; i <= 9; console.log('Цикл без тела {}: ' + i++)) { /* пусто */ }

/* 4. * Нарисовать пирамиду с 20 рядами с помощью console.log */

const pyramidScheme = (rows, symbol) => {
  let picture = '';
  for (let i = 1; i <= rows; i++) {
    console.log(picture += symbol);
  }
};

pyramidScheme(20, 'x');
