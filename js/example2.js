const salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

const valuesArr = Object.values(salaries);
console.log(valuesArr);

let sum = 0;
for (const value of valuesArr) {
	sum += value;
}

console.log(sum);
