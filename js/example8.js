//display the minimum

const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[0];

/* for (let i = 0; i < numbers.length; i += 1) {
	if (numbers[i] < min) {
		min = numbers[i];
	}
}
console.log(min);


 */

for (const number of numbers) {
	if (number < min) {
		min = number;
	}
}

console.log(min);
