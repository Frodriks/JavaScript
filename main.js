/* Introduktion */

//Hello World!

console.log('Hello, World');

//Variables
let greeting = 'Hej från en variable';
console.log(greeting);
greeting = 3;
console.log(greeting);

greeting = "Hello!";
const PI = 3.14;


//Printing
//Concatenation
console.log(greeting + ' PI is: ' + PI);

//Interpolation and templating literals
console.log(`${greeting}, PI is: ${PI}`);

//Be carful with floats
console.log(0.1 + 0.2);

//Equality
console.log(1 == 1); //true
console.log(1 == '1'); //true - will convert to same type
console.log(1 === '1') // false

//Loose typing and conversion
let myNumber = 5;
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); //10

myNumber = '5';
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); //55 - eftersom det är en string

/* Control flows */
//if

let myAge = 30;

if(myAge >= 40){
    console.log('You\'re to old to joing the gang!');
} else {
    console.log('You\'re to young to join the gang!');
}

myAge = 40;
if(myAge >= 40){
    console.log('You\'re to old to joing the gang!');
} else {
    console.log('You\'re to young to join the gang!');
}

//Ternary operation, conditional statement
myAge === 30 ?
    console.log('True') :
    console.log('False');

//boolean statement "?" = True : False

/*
    camelCase  // Praxis in JS functions, vars
    PascalCase // Classes
    snake_care // Often not used
*/

/* Loops */
// for

for(let i = 0; i < 5; i++) {
    console.log(i);
}

/* Arrays */
let persons = [
    'Mike',
    'Emma',
    'Ally',
    'Lizzie'
];

//Log entire array
console.log(persons);

//Length of array
console.log(persons.length);

//Get the first person in the array
console.log(persons[0]);

//Get the last person in the array
console.log(persons[persons.length - 1]);

//Get a slice of the array
let newPersons = persons.slice(0 , 2); //first two in the array

console.log(newPersons);

//Add to start of array
persons.unshift('Acke');

//Add to end of array
persons.push('Lotta');

console.log(persons);

//Remove from start of array
persons.shift();

//Remove from end of array
persons.pop();

console.log(persons);

//Loop arrays

for(let person of persons) {
    console.log(person);
}

//Older loop, but still works
for(let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}

//Lambda loop
persons.forEach(x => console.log(x));

//Objects : Key : Value

let mike = {
    firstName: 'Mike',
    lastName: 'Bäck',
    age: 38,
    hobby: 'Music'
};

console.log(mike);

console.log(`First name: ${mike.firstName}`);
let mikeStr = `${mike.firstName} ${mike.lastName}, age: ${mike.age}`;
console.log(mikeStr);

let mikeAdvanced = {
    firstName: 'Mike',
    lastName: 'Bäck',
    age: 38,
    hobbies: ['music','programming','reading','games']
};

console.log(mikeAdvanced); //Object
let mikeJSON = JSON.stringify(mikeAdvanced); //Object to JASON
console.log(mikeJSON);
console.log(JSON.parse(mikeJSON)); //JSON (Java-Script-Object-Notation)

//Loop over object
for(let propertyName in mikeAdvanced) {
    let propertyValue = mikeAdvanced[propertyName];
    console.log(propertyName, propertyValue);
}

//Loop through object and array inside of object
for(let propertyName in mikeAdvanced) {             //Loop over object
    let propertyValue = mikeAdvanced[propertyName]; //Get value from key
    if(Array.isArray(propertyValue) === true){      //Check if array
        for(let hobby of propertyValue) {           //Loop over array
            console.log("Hobby: " + hobby)
        }
    } else {
        console.log(propertyName + " + " + propertyValue);
    } 
}

//Connection to HTML
//Ask JS to create a new element
let myDiv = document.createElement('div');
//Add som HTML
myDiv.innerHTML = `
    <h1>Hello from JS!</h1>
    <p>This text is from JavaScript, my age is ${mike.age}</p>
`;

//Grab the body tag
let body = document.querySelector('body');

//Add the div to the HTML
body.append(myDiv);

//Another way to add data
let myBands = [
{
    name: 'The Beatles',
    genre: 'Pop'
},
{
    name: 'The Rolling Stones',
    genre: 'Rock'
}
];

//Grab the bands div
let bandsDiv = document.querySelector('#bands');
for(let band of myBands) {             //+= är en forkortning
    bandsDiv.innerHTML += ` 
    <div class="band">
        <h2>${band.name}</h2>
        <p>Genre: ${band.genre}</p>
    </div>
    `;
}

//Functions
function sayHello() {
    console.log('Hello');
}
const sayHello2 = () => {
    console.log('Hello 2');
}
sayHello();
sayHello2();

/* Different ways of declaring the sam function */
//Function decleration
function add(a, b) {
    return a + b;
}
//Arrow function
const add2 = (a, b) => {
    return a + b;
}
//Function expression
const add3 = function(a, b) {
    return a + b;
}

//Arrow function with implicit return
const add4 = (a, b) => a + b;

//Arrow function with implicit return and one parameter
const add5 = a => a + 5;

console.log(add(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));
console.log(add4(1, 2));
console.log(add5(1));

//Classes
class Person {
   constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
   }
   greetings() {
    console.log(`Hi, my name is: ${this.name} and I am ${this.age}`);
    console.log('I enjoy: ' + this.hobby);
   }
}
const mikeClass = new Person('Mike', 38, 'Music');
mikeClass.greetings();