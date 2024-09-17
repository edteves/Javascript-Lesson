const string = 'Welcome to the future';

const arr = string.split('');
console.log(arr);

const reverse = arr.reverse();
console.log(reverse);

const result = reverse.join('');
console.log(result);

const result2 = string.split('').reverse().join('');
console.log(result2);
