function printContactsInfo(...rest) {
	const namesArr = rest[0].split(',');
	const phonesArr = rest[1].split(',');
	const ageArr = rest[2].split(',');

	for (let i = 0; i < namesArr.length; i++) {
		console.log(
			`Name: ${namesArr[i]}; Phone: ${phonesArr[i]}; Age: ${ageArr[i]}`
		);
	}
}

printContactsInfo('ed, claire,princess', '01, 02, 03', '26, 25, 23');
