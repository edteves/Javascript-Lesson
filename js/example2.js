const min = function (a, b) {
	/* if (a < b) {
		return a;
	} else {
		return b;
	} */

	//ternary operator
	/* return a < b ? a : b; */

	return Math.min(a, b);
};

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
