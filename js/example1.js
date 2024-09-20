function calcBMI(weight, height) {
	const parseWeight = weight.replace(',', '.');

	return parseWeight / height ** 2;
}

const bmi = calcBMI('88.3', '1.75');
console.log(bmi);
