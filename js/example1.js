const user = {
	name: 'Mango',
	age: 20,
	hobby: 'html',
	premium: true,
};

//1
user.mood = ['happy'];
console.log(user);

//2
user.hobby = 'skydiving';
console.log(user);

//3
user['premium'] = false;
console.log(user);

//4
// const keysArr = Object.keys(user);
// console.log(keysArr);

// for (const key of keysArr) {
// 	console.log(`${key} - ${user[key]}`);
// }

//5
for (const key in user) {
	console.log(`${key} - ${user[key]}`);
}
