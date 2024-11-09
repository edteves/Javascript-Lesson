// function calculatorAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

const calculatorAverage = (...args) => {
  let total = 0;
  args.forEach(el => (total += el));
  return total / args.length;
};

console.log(calculatorAverage(1, 2, 3, 4, 5));
