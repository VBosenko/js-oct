// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let one = 1;
let ten = 10;
let nine = -999;
let onetwothree = 123;
let PI = 3.14;
let e = 2.7;
let sixteen = 16;
let rue = true;
let alse = false;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(one);
console.log(ten);
console.log(nine);
console.log(onetwothree);
console.log(PI);
console.log(e);
console.log(sixteen);
console.log(rue);
console.log(alse);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//

let firstName = 'Vasyl';
let middleName = 'V';
let lastName = 'Bosenko';

let person = `${firstName} ${middleName} ${lastName}`;

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100; let b = '100'; let c = true;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
//
//
// let firstNamePrompt = prompt('First name?', '');
// let midleNamePrompt = prompt('Middle name?', '');
// let agePrompt = prompt('Age?', '');
//
// console.log(firstNamePrompt, midleNamePrompt, agePrompt)