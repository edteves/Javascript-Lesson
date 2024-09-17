/* 

-Write a script to calculate the area of a rectangle with sides which values are stored in the values as a string 

-values guaranteed by a space

*/

const values = '8 11';

const arr = values.split(' ');
console.log(arr);

const firstValue = arr[0];
const secondValue = arr[arr.length - 1];

const areaOfRectangle = firstValue * secondValue;
console.log(areaOfRectangle);
