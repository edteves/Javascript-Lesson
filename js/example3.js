function getRectArea(dimensions) {
	const data = dimensions.split(' ');

	return data[0] * data[1];
}

console.log(getRectArea('8 11'));
