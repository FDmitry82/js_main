/* Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */

function ex1() {
  const namber = prompt('Введите число от 0 до 999: ', 245);
  if (namber > 0 && namber <= 999) {
    const units = namber % 10; // находим единицы
    const ten = namber % 100 - units; // находим десятки
    const hundreds = namber - units - ten; // находим сотни
    const objectNamber = {
      units,
      ten: ten / 10,
      hundreds: hundreds / 100,
    };
    alert('Единицы: ' + objectNamber.units + ', Десятки: ' + objectNamber.ten + ', Сотни: ' + objectNamber.hundreds);
  } else {
    alert('Ваше число "' + namber + '" должно быть в от 0 до 999');
  }
}



/* Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты. Перенести функционал подсчета корзины на объектно-ориентированную базу. */

function ex2() {

const basket = [
    { // 1
      name: 'Стол',
      cost: 120,
    },
    { // 2
      name: 'Стул',
      cost: 80,
    },
    { // 3
      name: 'Ваза',
      cost: 60,
    },
    { // 4
      name: 'Телевизор',
      cost: 180,
    },
    {// 5
      name: 'Ноутбук',
      cost: 120,
    },
  ];

costall = basket[0][`cost`]+basket[1][`cost`]+basket[2][`cost`]+basket[3][`cost`]+basket[4][`cost`]

console.log(basket[0]['name'] + ' - ' + basket[0][`cost`] + ' руб')
console.log(basket[1]['name'] + ' - ' + basket[1][`cost`] + ' руб')
console.log(basket[2]['name'] + ' - ' + basket[2][`cost`] + ' руб')
console.log(basket[3]['name'] + ' - ' + basket[3][`cost`] + ' руб')
console.log(basket[4]['name'] + ' - ' + basket[4][`cost`] + ' руб')
console.log('Общая стоимость товаров: ' + costall + ' руб');

}
