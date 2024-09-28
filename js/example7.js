function calcAverage(...args) {
	let sum = 0;

	for (let i = 0; i < args.length; i++) {
		sum += args[i];
	}

	return sum / args.length;
}

console.log(calcAverage(1, 2, 3, 4));
console.log(calcAverage(90, 70, 87, 98));
