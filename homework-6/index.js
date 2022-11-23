// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world'.toUpperCase();
// let b = 'lorem ipsum'.toUpperCase();
// let c = 'javascript is cool'.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD'.toLowerCase()
// let b = 'LOREM IPSUM'.toUpperCase();
// let c = 'JAVASCRIPT IS COOL'.toUpperCase();

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
//
// let func = (array) => {
//     let clear = array.split(' ')
//     let clearArray = []
//     for (let i = 0; i < clear.length; i++) {
//         if (clear[i] !== '') {
//             clearArray.push(clear[i])
//         }
//     }
//     return clearArray.join(' ')
// }
//
// console.log(func(str))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); //['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// let stringToarray = (array) => {
//     return array.split(' ')
// }
//
// let arr = stringToarray(str)
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// console.log([10,8,-7,55,987,-1011,0,1050,0].map(number => `${number}`))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let sortNums = (nums, direction) => {
//     if (direction = 'ascending') {
//         nums = nums.sort((a, b) => a - b)
//         return nums
//     } else if (direction = 'descending') {
//         nums = nums.sort((a, b) => b - a)
//         return nums
//     } else {
//         return false
//     }
// }

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let sortArray = (array) => (array.sort((a, b) => b.monthDuration.length - a.monthDuration.length))
// console.log(sortArray(coursesAndDurationArray))

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(num => num.monthDuration > 5))

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cardSuits = ['diamond', 'heart', 'clubs', 'spade'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'as'];
let cards = [];
let card = {}

for (let i = 0; i < cardSuits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        card = {values: values[j], cardSuits: cardSuits[i]};
        if (i < 2) {
            card.color = 'red'
        } else {
            card.color = 'black'
        }
        cards.push(card);
    }
}

// console.log(cards.filter(value => value.values === 'as').filter(value => value.cardSuits === 'clubs'));
// console.log(cards.filter(value => value.values === '6'));
// console.log(cards.filter(value => value.color = 'red'));
// console.log(cards.filter(value => value.cardSuits = 'diamond'));
console.log(cards.filter(value => value.cardSuits = 'spade').filter(value => Number(value.values) >= 9 || value.values.length >= 2));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
