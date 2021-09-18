let a = 10;
let b = a;

a = 0;

console.log(b);

console.log({});
console.log([]);
console.log(x => x * 2);


// typeof(value) === 'date'
// console.log(value);

let reaction = 'yikes';
reaction[0] = 'l';
console.log(reaction);

let pet = 'Narwhal';
pet = 'The Kraken';
console.log(pet); // The Kraken


// let numberOfTentacles = 10;
// numberOfTentacles = 'eight';
// console.log(typeof(numberOfTentacles));  // Answer: Yes, it’s valid. It prints "string" to the console. Variables don’t have types in JavaScript — only values do. The answer to typeof(numberOfTentacles) depends on which value the variable was pointing to at that time. The numberOfTentacles variable was pointing to "eight" string value at the time we asked about its type. So we got "string" as a result.

let numberOfTentacles = 10;
console.log(typeof(numberOfTentacles));
numberOfTentacles = 'eight'; // Answer: Yes, there is a difference. It prints "number" to the console. Variables don’t have types in JavaScript — only values do. The answer to typeof(numberOfTentacles) depends on which value the variable was pointing to at that time. The numberOfTentacles variable was pointing to 10 number value at the time we asked about its type. So we got "number" as a result.

// let answer = true;
// answer.opposite = false;
// console.log(answer.opposite); // Answer: this code won’t be able to set a property. Booleans are primitive. And primitive values are immutable. We can’t change them — and setting a property on a value is a change. If our code runs in the strict mode, assigning a property on a primitive value would lead to an error. Otherwise, it will silently do nothing. In either case, we can’t set a property on a boolean value like true.

// null = 10;
// console.log(null);  //Answer: this code produces an error. It is an error because the left side of assignment must always be a “wire”. Variables are “wires”, so they can appear on the left side. A literal like null is not a “wire”, so trying to assign something to it is meaningless.

let it = 'be';
let them = 'eat cake';
it = them

// let pets = 'Tom and Kerry';
// feed(pets);
// console.log(pets[0]);

let pets = ['Tom', 'Kerry'];
// feed(pets);
console.log(pets[0]);