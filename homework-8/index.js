// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, userName, surname, email, phone) {
    this.id = id;
    this.userName = userName;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User("1", "Oleh", "Starodub", "OlehStarodub@gmail.com", "0687438711"),
    new User("2", "Artur", "Starodub", "AreutStarodub@gmail.com", "0687438712"),
    new User("3", "Anton", "Starodub", "AntonStarodub@gmail.com", "0687438713"),
    new User("4", "Bohdan", "Starodub", "BohdanStarodub@gmail.com", "0687438714"),
    new User("5", "Shasha", "Starodub", "ShashaStarodub@gmail.com", "0687438715"),
    new User("6", "Petya", "Starodub", "PetyaStarodub@gmail.com", "0687438716"),
    new User("7", "Kolya", "Starodub", "KolyaStarodub@gmail.com", "0687438717"),
    new User("8", "Igor", "Starodub", "IgorStarodub@gmail.com", "0687438718"),
    new User("9", "Vadim", "Starodub", "VadimStarodub@gmail.com", "0687438719"),
    new User("10", "John", "Starodub", "JohnStarodub@gmail.com", "0687438710")
]


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

evenId = users.filter(odd => odd.id % 2 === 0)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

sortIdGrow = users.sort((a, b) => a.id - b.id)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//     this.model = model
//     this.manufacturer = manufacturer
//     this.yearOfManufacture = yearOfManufacture
//     this.maximumSpeed = maximumSpeed
//     this.engineCapacity = engineCapacity
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maximumSpeed} на годину`);
//     }
//     this.info = function () {
//         for (let key in this) {
//             if (typeof this[key] === "string" || typeof this[key] === "number") {
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maximumSpeed = this.maximumSpeed + newSpeed
//     }
//     this.changeYear = function (newValue) {
//         this.yearOfManufacture = newValue
//     }
//     this.addDriver = function (driver) {
//         this.drive = driver
//     }
// }

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//         this.model = model
//         this.manufacturer = manufacturer
//         this.yearOfManufacture = yearOfManufacture
//         this.maximumSpeed = maximumSpeed
//         this.engineCapacity = engineCapacity
//     }
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maximumSpeed} на годину`)
//     }
//     info() {
//         for (let key in this) {
//             if (typeof this[key] === "string" || typeof this[key] === "number") {
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maximumSpeed = this.maximumSpeed + newSpeed
//     }
//     changeYear(newValue) {
//         this.yearOfManufacture = newValue
//     }
//     addDriver(driver) {
//         this.drive = driver
//     }
// }


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(nameCinderella, age, footSize) {
        this.nameCinderella = nameCinderella
        this.age = age
        this.footSize = footSize
    }
}

let cinderellaArray = [
    new Cinderella('Olivia', 19, 34),
    new Cinderella('Emma', 20, 34),
    new Cinderella('Ava', 21, 35),
    new Cinderella('Charlotte', 22, 35),
    new Cinderella('Sophia', 23, 36),
    new Cinderella('Amelia', 23, 36),
    new Cinderella('Isabella', 23, 37),
    new Cinderella('Mia', 24, 34),
    new Cinderella('Evelyn', 25, 36),
    new Cinderella('Harper', 24, 34)
]

console.log(cinderellaArray.length)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, findFootSize) {
        this.name = name
        this.age = age
        this.findFootSize = findFootSize
    }
}

let princeJohn = new Prince('John', 30, 37)

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.


for (let item of cinderellaArray) {
    if (item.footSize === princeJohn.findFootSize) {
        console.log(item.nameCinderella)
    }
}

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderella = cinderellaArray.find(a => a.footSize === princeJohn.findFootSize)