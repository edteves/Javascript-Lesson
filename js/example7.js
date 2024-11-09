//convert to forEach

// function logItems(items) {
//   //   for (let i = 0; i < items.length; i += 1) {
//   //     console.log(`${i + 1} - ${items[i]}`);
//   //   }

//   items.forEach((el, index) => {
//     console.log(`${index} - ${el}`);
//   });
// }

const logItems = items => {
  //   for (let i = 0; i < items.length; i += 1) {
  //     console.log(`${i + 1} - ${items[i]}`);
  //   }

  items.forEach((el, index) => {
    console.log(`${index} - ${el}`);
  });
};

logItems(['🎎', '🎗', '🎟', '🎪']);
