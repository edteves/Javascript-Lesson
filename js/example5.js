/* const string = 'Welcome to the future';

const newString = string.split(' ');
console.log(newString);

newString.shift();
console.log(newString);

newString.pop();
console.log(newString);

const newArray = newString.join();
console.log(newArray); */

const string = 'Welcome to the future';
const words = string.split(' ');
console.log(words);

console.log(words.slice(1, 3).join(' '));
