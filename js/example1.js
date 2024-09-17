const genres = ['Jazz', 'Blues'];
console.log(genres);

//add element to the last
genres.push('Rock and Roll');
console.log(genres);

const firstEl = genres[0];
console.log(firstEl);

const lastEl = genres[genres.length - 1];
console.log(lastEl);

//delete element from the start
const deleteFirstEl = genres.shift();
console.log(deleteFirstEl);
console.log(genres);

//add element to the start
const addFirstEl = genres.unshift('Country', 'Reggae');
console.log(addFirstEl);
console.log(genres);
