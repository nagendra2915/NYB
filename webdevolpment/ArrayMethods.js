//number array
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = nums.filter((num, index) => nums.indexOf(num) === index);
console.log(uniqueNums); 

//string array
const singers = ["Zayn", "theWeekend", "EdShreen", "Dua lipa", "Taylor Swift"];
const PopSingers = singers.filter((singer, index) => singers.indexOf(singer) === index);
console.log(PopSingers); 

//finding depth while flattening an array
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(1));
console.log(arr.flat(2)); 

//at()
const numbers = [10, 20, 30, 40, 50];
console.log(numbers.at(0));   
console.log(numbers.at(2));   
console.log(numbers.at(-1)); 
console.log(numbers.at(-3)); 
console.log(numbers[-1]);

//.at() with other methods

const scores = [85, 92, 78, 90, 88];
const highScores = scores.filter(score => score > 80);

console.log(highScores.at(-1));
console.log(highScores.at(-2));


