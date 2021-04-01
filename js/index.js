const box = document.getElementById('box');
box.style.backgroundColor = "green";

const input = document.getElementById("input_box");
input.addEventListener('change', handleUpdate);

function handleUpdate(e) {
    box.style.height = `${parseInt(e.target.value) * 2}px`;
    box.style.width = `${parseInt(e.target.value) * 2}px`;
}


const sayHi = document.getElementById('test');

function sayHowdy(greet, myname, age) {
    sayHi.innerHTML = `${greet}, My name is ${myname} and I am ${age} years old.`;
}

sayHowdy("Howdy", "Steven", "43");

function createPerson(name, age, admin) {
    return {
        name,
        age,
        isAdmin: admin
    };
}

console.log(createPerson("Steven", 43, true));

// Set default value an override the default value
function sayGoodMorning(name = "Steven") {
    return `Good morning ${name}`;
}


// Adding a computed property

const specialProperty = "species";

const pet = {
    name: "Colin Shitty Robinson",
    age: 1,
    isAdmin: false,
    [specialProperty]: "Cat"
};

console.log(pet);

function makeObject(key, value, petName) {
    return {
        [key]: value,
        petName
    };
}

const user = makeObject("username", "john");
const dog = makeObject("breed", "mutt", "Ira Stinkybutt");

console.log(user);
console.log(dog);
// Set timestamp

function getDate() {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${date.getMonth(),1}-${date.getDate()}`;
    const formattedTime = `${date.getHours()}:${date.getMinutes()}`;
}


// JS objects 
function createPerson(name, age, admin) {
    return {
        // if the name is the same for name and age you only have to write it once
        name: name,
        age: age,
        isAdmin: admin
    };
}

console.log(createPerson("lydia", 21, false));
console.log(createPerson("John", 23, true));

//  Computed Property names from ES6

// ES5 version

// const specialProperty = "nationality";

const person = {
    name: 'John',
    age: 22,
    isAdmin: false
};

person[specialProperty] = "German";

console.log(person);

// In ES6 you can add the special property to the objectFit: 
const es6SpecialProperty = "pet";

const animal = {
    name: 'C.R.',
    age: 1,
    isAdmin: false,
    [es6SpecialProperty]: 'cat'
}

window.localStorage.setItem("myname", 'Steve');
window.sessionStorage.setItem('catname', 'Colin Shitty Robinson');
window.sessionStorage.setItem('name', person.name);



function makeObject(key, value) {
    return {
        [key]: value
    };
}

const userES6 = makeObject("username", "Wilfred");
const dogES6 = makeObject("breed", "Mutt");

const PersonFullName = {
    firstName: "John",
    lastName: "Dunket",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(PersonFullName.getFullName());


const PersonFullNameES6 = {
    firstName: "John",
    lastName: "Dunket",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};


const specialPropertyES6 = 'is dating a';
const firstName = 'John';
const lastName = 'Doe';

const CleanPersonES6 = {
    firstName,
    lastName,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    [specialPropertyES6]: "German"
};


// Creating Default objectPosition: 

function greeting(name = "Stranger") {
    return `Hello there ${name}`;
}

console.log(greeting());
console.log(greeting('Steve'));


// rest parameters "...arrayName" creates an array always has to be the last argument passed to the function.

function sum(a, b, ...values) {
    let sum = a + b;
    values.forEach(value => (sum += value))
    return sum;
}

console.log(sum(2, 5, 1, 2, 3, 9, 8, 2)); //expectd output 32 sum wil not calculate the sum of all numbers entered no matter how many

// Spread Operator "..." creates a new object containing the properties of the old object 

const userSpread = { name: "John Doe" };
const cart = {
    items: [{ name: "shirt", quanitity: 1 }, { name: "book", quanity: 3 }]
}

const deliveryAddress = {
    street: "100 Main Street",
    city: "Miami",
    state: "FL"
};

const purchase = {
    ...userSpread,
    ...cart,
    ...deliveryAddress
};

// Show a message on the first visit only 
//https://stackoverflow.com/questions/32865390/popup-on-website-load-once-per-session
//https://stackoverflow.com/questions/24189428/display-a-popup-only-once-per-user