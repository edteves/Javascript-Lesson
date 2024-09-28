function formatTime(minutes) {
	const hours = Math.floor(minutes / 60)
		.toString()
		.padStart(2, 0);

	const min = (minutes % 60).toString().padStart(2, 0);

	return `${hours}: ${min}`;
}

console.log(formatTime(70));
