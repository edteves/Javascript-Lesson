const names = 'Jacob,William,Solomom,Artemis';
const phone = '1133,1172,1192,1172';

const namesArr = names.split(',');
console.log(namesArr);

const phoneArr = phone.split(',');
console.log(phoneArr);

for (let i = 0; i < namesArr.length && phoneArr.length; i += 1) {
	console.log(`Name: ${namesArr[i]}, Phone: ${phoneArr[i]}`);
}
