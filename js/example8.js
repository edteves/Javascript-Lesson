const printContactInfo = ({ names, phones }) => {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  //   for (let i = 0; i < nameList.length; i += 1) {
  //     console.log(`${nameList[i]}: ${phoneList[i]}`);
  //   }

  nameList.forEach((element, index) => {
    console.log(`${element}: ${phoneList[index]}`);
  });
};

printContactInfo({
  names: 'Ed,Claire',
  phones: '1,2',
});
