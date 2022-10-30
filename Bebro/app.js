
/* 1. Всего 100%, если рандомное число умножить на 100(100%) будет равно 10(10%) или меньше - выводиться 1
// 2. Если рандомное число умножить на 100(100%) будет равно 20(20%) или меньше - выводиться 2
// 3. Если рандомное число больше 10 и 20, то выводиться с шансом 70(70%(10% + 20% = 100% - 30% = 70%)) - 3

const a = Math.ceil(Math.random() * 100)
if( a <= 10) console.log(1)
else if( a <=20) console.log(2)
else console.log(3)

↑↑↑ РАНДМНЫЙ ВЫВОД В КОНСОЛЬ С ПОМОЩЬЮ ПРОЦЕНТОВ ↑↑↑

/*
let array = [
    { label: 'Russia' },
    { label: "Germany" },
    { label: "France" },
    { label: "USA" }
]

function create (arr, str) {
    const select = document.body.appendChild(document.createElement('select'));
    arr.forEach(function(el) {
        const option = document.createElement('option')
        option.innerText = Object.values(el);
        select.appendChild(option)
        if (option.value === str) {
            option.setAttribute('selected', true)
        }
    })
    
    return 
}

create(array, 'Germany')

let pussy = document.body.appendChild(document.createElement('h1'))
let juccy = pussy.innerText = 'Я гей'
let classes = pussy.id = 'fff'
const heading = document.getElementById('fff')
let classs = heading.classList.add('header')
console.log(heading)

↑↑↑СОЗДАЕТ ТЕГ SELECT, В КОТОРОМ СОЗДАЕТСЯ ТЕГ OPTION, ВЫВОДИТЬСЯ РАСКЛАДОЧНОЕ МЕНЮ С 4 СТРАНАМИ, СДЕЛАНО С ПОМОЩЬЮ DOM. СОЗДАНИЕ ТЕГА, ВВОДИТСЯ В ТЕГ НАЗВАНИЕ, СОЗДАЕТСЯ ЕМУ АЙДИ, С ПОМОЩЬЮ АЙДИ СОЗДАЕТСЯ КЛАСС.

let roadMines = [false, false, false, true, false, false, false, false, false, true]

let lives = 100

for (i = 0; i < roadMines.length; i + 1) {
    console.log(`Танк переместился на ${++i}`)
        if (roadMines[i] === true && lives > 50) {
            lives -= 50
            console.log('Танк повреждён')
        }
        else if (roadMines[i] === true && lives === 50) {
            lives -= 50
            console.log('Танк взорван')
            break;
        }
}

↑↑↑МИНИ-ИГРА В ТАНЧИКИ, ЕСТЬ МИННОЕ ПОЛЕ И ПРИ ЗНАЧЕНИИ TRUE ТАНК ПОВРЕЖДАЕТСЯ, ПРИ ПОВТОРНОМ РАЗЕ - ТАНК ВЗРЫВАЕТСЯ. ПРИ ЗНАЧЕНИИ FALSE ТАНК ПЕРЕДВИГАЕТСЯ НА 1 КЛЕТКУ↑↑↑

function reverseStr(str) {

	var newStr = '', i;

	for (i = str.length - 1; i >= 0; i--) {

	    newStr += str.charAt(i);
}

	 return newStr;
}

↑↑↑ПЕРЕВЕРНУТЫЙ ТЕКСТ↑↑↑

console.log(reverseStr('Привет мир!'));


 function password (pass) {
    if (pass.length > 4 && (pass.test('-') || pass.test('_')) ) {
        return 'Пароль надежный!'
    }
    else {
        return 'Пароль недостаточно надёжный!'
    }
    return pass
}

password('1234-')

↑↑↑ПРОВЕРКА БЕЗОПАСТНОСТИ ПАРОЛЯ, ДЛИНА ДОЛЖНА БЫТЬ ОТ 4 СИМВОЛОВ И ВКЛЮЧАТ В СЕБЯ - И _↑↑↑

//let n = 10
//let sum = 0
//let i = 0
//
//for (i = 0; i <= n; i++) {
//    sum = sum + i
//}
//
// console.log('Result: ' + sum)

↑↑↑ЦИФРЫ СКЛАДЫВАЮТСЯ ДРУГ С ДРУГОМ ДО ОПРЕДЕЛЕННОГО МОМЕНТА↑↑↑

//let m = 60

//let n = 70

//let i = m

//let result = 1

//do {
//    if (i % 2 === 1) {
//        result *= i;
 //   }
//    i++;
//} while (i <= n);
//
//console.log('Result: ' + result)

↑↑↑УМНОЖЕНИЕ НЕЧЕТНЫХ ЧИСЕЛ ОДНО(СУММА ПРОШЕДШЕЙ ИТЕРАЦИИ) НА ДРУГОЕ ПОКА I НЕ СТАНЕТ N ↑↑↑

 let i = 1

 let n = 0

 let result = i * n

 for (i = 1; i <= 9; i++) {
    for (n = 0; n <= 10; n++) {
         console.log(`${i}${' x '}${n}${' = '}${i * n}`)
     }
     console.log(`\n ${'↑↑'} ${i} ${'↑↑'} \n`)
}

// ↑↑↑ТАБЛИЦА УМНОЖЕНИЕ ОТ 1 ДО 5, ПРИ ОКОНЧАНИИ КАЖДОГО СТОЛБИКА ПРОИСХОДИТ СЧЕТ ДАННОЙ ТАБЛИЦЫ И ОНА НОМИРУЕТСЯ↑↑↑



const getSpecial = arr => arr.filter(num => num % 3 === 0)

const array = [1, 3, 4, 6, 7, 8, 13, 16]
console.log(getSpecial(array))

// ↑↑↑ФУНКЦИЯ ФИЛЬТРУЕТ МАССИВ И ВЫВОДИТ ТОЛЬКО В НОВЫЙ МАССИВ ЧИСЛА КРАТНЫЕ 3↑↑↑



const sortDesc = arr => arr 
    .slice()
    .sort((a, b) => (b, a))


const array = [1, 3, 4, 6, 7, 8, 13, 16]
console.log(sortDesc(array))

// ↑↑↑Сортирует массив по убывания↑↑↑



const flatArray = arr => arr.flat()

const array = [1, [3], 4, 6, [7, 8, 13], 16]
console.log(flatArray(array))


// ↑↑↑Из одномерного массива в плоский массив↑↑↑

const getMessagesForBestStudents = (allStudentsList, tudentsForRetake) =>
    allStudentsList.filter(allStudentsList => !tudentsForRetake.includes(allStudentsList))
        .map(allStudentsList => ('Good job, ' + allStudentsList));

    const allStudentsList = ['Ann', 'James', 'Bibi', 'Rick']
    const tudentsForRetake = ['Bibi', 'Rick']

console.log(getMessagesForBestStudents(allStudentsList, tudentsForRetake)) 

// ↑↑↑Генерирование сообщения для студентов, которые сдали экзамен↑↑↑


const users = { 
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
}

function getAdults (usersis) {
    let result = Object.entries(usersis)
        .filter(key => key[1] >= 18)
        .map(key => key[0])
    return result
}

console.log(getAdults(users))

// ↑↑↑Выводит имена тех, у кого возраст равен или больше 18↑↑↑


const users = { 
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
}

function copyObj () { 
    return { ...users }
}

console.log(copyObj())


const users = { 
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
}

function copyObj () { 
    let man = Object.assign({}, users)
    return man
}

console.log(copyObj())

// ↑↑↑Два способа копии объекта↑↑↑

function GenerateArray(n) {
    let arr = [];
    for(let i = 0; i < n; i++) {
      arr.push(Math.round(Math.random() * 100));
    }
    document.getElementById('array').innerHTML = arr;
  }

// ↑↑↑Рандомное число до 100 и выводиться на экран. Работает при нажатии кнопки↑↑↑

var things = ['Rock', 'Paper', 'Scissor'];
var thing = things[Math.floor(Math.random()*things.length)];
console.log(thing)
// alert('The computer chose:' + thing);

// ↑↑↑На рандом выпадает камень, ножницы или бумага. Рандомное число умножается на количество предметов в строке и округляется в ближайшую сторону↑↑↑

const getParsedIntegers = (arr) => arr
    .map(el => Number.parseInt(el))

console.log(getParsedIntegers(bou))

const bou = [1, '5gfg', 'gdfgdtgd56', 99, null, '123tebepizda']

const getParsedIntegersV2 = (arr) => arr
    .map(el => parseInt(el))

console.log(getParsedIntegersV2(bou))

const bou = [1.12, '5.77gfg', 'gdfgdtgd56.9989896', 99, null, '123.6tebepizda']

const getParsedFloats = (arr) => arr
  .map(el => Number.parseFloat(el))

console.log(getParsedFloats(bou))

const getParsedFloatsV2 = (arr) => arr
  .map(el => Number.parseFloat(el))

console.log(getParsedFloatsV2(bou))

// ↑↑↑1. Убирает ненужное и оставляет только текст. 2. Тоже самое только еще с дробями↑↑↑

const multiRound = num => [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    +num.toFixed(2)
];

console.log(multiRound(1456.3132141))

// ↑↑↑Округление цифр до 3 цифр после запятой↑↑↑

const array = [-777, 883, -1, 45, -20]

const getMaxAbsoluteNumber = (arr) => {
    const result = arr
        .map(el => Math.abs(el))

    const max = Math.max(...result)

    return max

}

console.log(getMaxAbsoluteNumber(array))

// ↑↑↑Делается модуль и ищется самое большое число в массиве↑↑↑



const calculator = (number) => {
    const split = number.split(' ')
    let result;
    let delitResult;
    switch (split[1]) {
        case '+':
            result = +split[0] + +split[2] 
            break;
            case '-':
                result = +split[0] - +split[2] 
                break;
                case '*':
                    result = +split[0] * +split[2] 
                    break;
                    case '/':
                        delitResult = +split[0] / +split[2]
                        result = delitResult.toFixed(3)
                        break;
    }
    return result
}

console.log(calculator('1 / 3'))
console.log(calculator('7 * 3'))
console.log(calculator('119 + 3'))
console.log(calculator('1 - 3'))
console.log(calculator('9 - 3'))

// ↑↑↑Калькулятор способный умножать, делить, вычитать и слагать. При делении, если после запятой будет более 3 символов то они сокращаются до 3 собственно.↑↑↑

//test1, test2, test3, test4, test5, test6 --- jest.test.js

export const getSquaredArray = numbers =>
    numbers.map(num => num * num);

export const getOddNumbers = numbers =>
    numbers.filter(num => (num % 2 === 1));

export default (a, b) => a + b;

// ↑↑↑Создается 3 функции и 2 из них экспортируются, 1 функция по дефлоту экспортируется.↑↑↑

const data = {
    a: '1',
    b: '2',
    c: '4',
}

const mydata = Object.values(data)

//Выводиться 2 пункт в объекте

const mappingData = mydata.map(num => num)

// Создается массив с пунктом

const flating = mappingData.flat()

// Массив делается однострочным

console.log(flating)

// ↑↑↑Из объекта в массив↑↑↑

*/
