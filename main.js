/* Introduktion */

//Hello World!

console.log('Hello, World');

//Variables
let greeting = 'Hej från en vaiable';
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

//Objects

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