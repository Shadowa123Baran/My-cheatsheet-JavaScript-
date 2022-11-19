
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

let message = 'Just learn it'

const createMessage = () => {
    const sendMessage = (name) => {
        let sender = 'John'
       console.log(`${name}, ${message}! Your ${sender}.`)
    }
    const setMessage = (text) => {
        message = text
    }
    return {
        sendMessage,
        setMessage,
    }
}

createMessage().setMessage('Good job')
createMessage().sendMessage('Ann') 

// ↑↑↑ Хз че это, я забыл(не работает как надо, в 411 строчке верный ответ) ↑↑↑

// Сама функция
// let count = 0 - так оно все время не влияет с makecounter
const makeCounter = () => {
    let count = 0 // вот так уже влияет
    return function(){ // 
        return count++ // - только на этом этапе выводиться
    }
}

// Независимые штучки
const counter1 = makeCounter() 
const counter2 = makeCounter() 

// Коунтер крутой
console.log(counter1()); 
console.log(counter1()); 
console.log(counter2()); 
console.log(counter1()); 
console.log(counter2()); 

// ↑↑↑ Пример замыкания, создание независимых счетчиков. Из за ++ после слова сначало выоводиться до этого но содержит на 1 больше, то есть выводит 1, а на самом деле там 2 и при следующим консоль логе будет выводить 2, но хотя там 3. Из-за того что переменная count внутри функции, то она работает только на ней. ↑↑↑

let message;
let sender;

const createMessage = () => {
    function sendMessage (name) {
       console.log(`${name}, ${message}! Your ${sender}.`)
    }
    function setMessage (text) {
        message = text
    }
    function setSender (text) {
        sender = text
    }
    return {
        sendMessage,
        setMessage,
        setSender,
    }
}

createMessage().setMessage('Good job')
createMessage().setSender('Tom')
createMessage().sendMessage('Ann')

// ↑↑↑ Штука, с помощью, который можно менять переменные вводя текст в 3 функции и получаю 1 крутую! ↑↑↑

user = {
    lastname: 'John',
    firstname: 'Doe',
    getFullName() {
        console.log(`${this.lastname} ${this.firstname}`)
    }
}

user.getFullName() // работает
const func = user.getFullName.bind(user) // работает
// const func = user.getFullName // не работает
func()

// ↑↑↑ Вот эта штучка берет lastname и firstname и соединяет в fullName.

const callbackPrompt = {
    message: 'How old are you?',
    showPrompt() {
        const number = prompt(this.message);
        console.log(number);
    },
    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
    },
}

callbackPrompt.showDeferredPrompt(1000)

// ↑↑↑ Вот эта штучка, выдает промт спустя 1 секунд. Когда вписываешь туда текст он выводиться к консоль. ↑↑↑

function defer (func, ms) {
    return function() {
        setTimeout(() => func.call(this), ms)
    }
}

const user = {
    name: 'Tom',
    sayHi(){
        console.log( `Hello, I am ${this.name}`)
    },
}

const deffered = defer(user.sayHi, 1000)

deffered.call({ name: 'Ben' }) 

// ↑↑↑ Вот эта штучка, выводить в консоль текст спустя 1 секунду, также тут меняется name. ↑↑↑

const event = {
    message: `Welcome to the party.`,
    guests: [
        { name: 'John', age: 18, email: 'john@server.com' },
        { name: 'Ben', age: 35, email: 'ben@server.com' },
        { name: 'Tom', age: 16, email: 'tom@server.com' },
    ],
    getInvitations() {
        return this.guests
            .filter(({age}) => age >= 18)
            .map(({name, email}) => ({
                text: `Dear ${name}! ${this.message}`,
                email
            }))
    }
}

console.log(event.getInvitations())

// ↑↑↑ Тем у кого возраст 18 или больше, то выводиться 497 и 498 строчка ↑↑↑

const wallet = {
    getMax() {
        return Math.max.apply(null, [1, 2, 3, -6]);
    },
    getMin() {
        return Math.min.apply(null, [1, 2, 3, -6]);
    },
};

console.log(wallet.getMax())
console.log(wallet.getMin())

// ↑↑↑ ущнается самое выксокое и маленькое число в массиве ↑↑↑

function sumOfSquares() {
    return [].map.call(arguments, num => num * num)
        .reduce((acc, num) => acc + num, 0 );
}


console.log(sumOfSquares(1, 2, 3, 4, 5))

// ↑↑↑ Функция решает независимо сколько цифр возращает сумму квадратов ↑↑↑

function getFullName (name) {
    if (name === 'Витя') {
        console.log('Хуиитя')
    }
    else if (name === 'Айрат') {
        console.log('Хуийрат')
    }
    return
}

getFullName('Витя')
getFullName('Айрат')



const getFullName = {
    message: 'Ваше имя:',
    showPrompt() {
        const name = prompt(this.message);
        const newName = name.toLowerCase()
        if (newName === 'витя') {
            console.log('Хуиитя')
        }
        else if (newName === 'айрат') {
            console.log('Хуийрат')
        }
        else if (newName === 'олег') {
            console.log('Хуиолег')
        }
        else if (newName === 'никита') {
            console.log('Хуииникита')
        }
        else if (newName === 'виталя') {
            console.log('Хуийвиталик')
        }
        else if (newName === 'толик') {
            console.log('Хуитолик')
        }
        else if (newName === 'максим') {
            console.log('Хуиймаксим')
        }
        else if (newName === 'нурлан') {
            console.log('Хуийнурлан')
        }
        else if (newName === 'ваня') {
            console.log('Хуийваня')
        }
        else {
            console.log(name)
        }
    },
}

const func = getFullName.showPrompt.bind(getFullName)

func() 

// ↑↑↑ Крутой обзыватель имен ↑↑↑ 

const vehicle = {
    move() {
        console.log(`${this.name} ${'is moving'}`)
    },
    stop() {
        console.log(`${this.name} ${'stopped'}`)
    },
}

const ship = {
    name: 'Dracon',
    liftAnchorUp() {
        console.log(`${this.name} lifting anchor up`);
    },
    liftAnchorDown() {
        console.log(`${this.name}lifting anchor down`);
    },
    startMachine() {
        this.liftAnchorUp();
        this.move();
    },
    stopMachine() {
        this.stop();
        this.liftAnchorDown();
    },
    __proto__: vehicle
}

ship.startMachine()

// ↑↑↑ Кораблик, который унаследовал поведению средствам передвижения ↑↑↑ 

const str = 'Privet ya leha';
const output = new SpeechSynthesisUtterance(str);
window.speechSynthesis.speak(output);

// ↑↑↑ Туды сюды говорит он ↑↑↑ 

const ship = {
    name: 'Dracon',
    liftAnchorUp() {
        console.log(`${this.name} lifting anchor up`);
    },
    liftAnchorDown() {
        console.log(`${this.name}lifting anchor down`);
    },
    startMachine() {
        this.liftAnchorUp();
        this.move();
    },
    stopMachine() {
        this.stop();
        this.liftAnchorDown();
    },
}

// ↑↑↑ Корабль, который имеет имя и способен опускать якорь и двигаться, также поднимать и останавливаться. ↑↑↑

function getOwnProps (obj) {
    for(let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop)
        }
    }
    return 
}

getOwnProps(ship)

// ↑↑↑ Выводит из объекта то, что было введено без прототипа ↑↑↑

function User(name, age) {
    this.name = name
    this.age = age
}

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`)
}

User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`)
}

User.prototype.setAge = function(value) {
    if (value < 0) {
        console.log('New photo was not requested')
    }
    this.age = value;
    if (value >= 25) {
        this.requestNewPhoto()
    }
    return value
}

const user1 = new User('Tom', 28)
const user2 = new User('Ben', 31)
const user3 = new User('Jack', 26)

console.log(user1)
//
user1.sayHi()
user2.sayHi()
//
user1.requestNewPhoto()
console.log(user2)
user2.setAge(31)
user3.setAge(-1)
//

// ↑↑↑ через New, тип прочитай и все норм будет. ↑↑↑
const object = {
    firstName: 'Alex',
    lastName: 'Burudinskiy',
    age: 17,
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const [firstName, lastName] = value.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    }
}

const func1 = object.fullName

console.log(func1)

object.fullName = 'Oleg Familitskiy'

console.log(object.fullName)

// ↑↑↑ 1. Без вводимого слова выводить фуллнаме 2. Вводить вводимоеное слово и тебе выдает его только уже через сплит в массиве тип. ↑↑↑ 

*/