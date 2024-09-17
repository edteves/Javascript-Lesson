const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

const sortItems = langs.sort();
console.log(sortItems);

// for (let i = 0; i < langs.length - 1; i += 1) {
// 	for (let j = i + 1; j < langs.length; j += 1) {
// 		const firstLetterI = langs[i][0];
// 		const firstLetterJ = langs[j][0];

// 		if (firstLetterI > firstLetterJ) {
// 			const temp = langs[i];
// 			langs[i] = langs[j];
// 			langs[j] = temp;
// 		}
// 	}
// }

// console.log(langs);

langs.sort((i, j) => {
	const firstLetterI = i.charAt(0);
	const firstLetterJ = j.charAt(0);

	if (firstLetterI < firstLetterJ) {
		return -1;
	} else if (firstLetterI > firstLetterJ) {
		return 1;
	} else {
		return 0;
	}
});

console.log(langs);
