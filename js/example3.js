const stones = [
	{ name: 'Emerald', price: 1300, quantity: 4 },
	{ name: 'Diamond', price: 2700, quantity: 3 },
	{ name: 'Sapphire', price: 400, quantity: 7 },
	{ name: 'Rubble', price: 200, quantity: 2 },
];

const calcTotalPrice = function (stones, stoneName) {
	let result;

	for (const stone of stones) {
		if (stoneName === stone.name) {
			result = stone.price * stone.quantity;
		}
	}
	return result;
};

let total = calcTotalPrice(stones, 'Diamond');
let total2 = calcTotalPrice(stones, 'Sapphire');
console.log(total, total2);
