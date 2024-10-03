function printContactsInfo({ names, phones }) {
	const nameList = names.split(',');
	const phoneList = phones.split(',');
	for (let i = 0; i < nameList.length; i += 1) {
		console.log(`${nameList[i]}: ${phoneList[i]}`);
	}
}

printContactsInfo({
	names: 'Jacob,William,Solomon,Artemis',
	phones: '1,2,3,4',
});
