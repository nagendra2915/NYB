//1.question

function getFirstChar(str) 
{
    if (str.length === 0) 
    {
      return null;
    }
    return str[0];
}
console.log(getFirstChar("MS Dhoni"));
console.log(getFirstChar("Dewald Brewis"));
console.log(getFirstChar("!@#$%"));

//2.question

function sumArray(arr) 
{
    let sum = 0;
    for (let num of arr) 
    {
      sum += num;
    }
    return sum;
}
console.log(sumArray([15,20,15,50]));
console.log(sumArray([10,-10,20,-20,50]));
console.log(sumArray([0.5,0.5,0.5,0.5,0.25]));

//4.question

function getArrayLength(arr) 
{
    let count = 0;
    for (let _ of arr) 
    {
      count++;
    }
    return count;
}
console.log(getArrayLength([]));
console.log(getArrayLength([1,7,8,45,12]));
console.log(getArrayLength(["Jaguar","RollsRoyce","Ferrari"]));

//7.question

function minToSec(minutes) 
{
    return minutes * 60;
}
console.log(minToSec(7));
console.log(minToSec(8));
console.log(minToSec(12));

//5.question

function repeatTheString(str, n) 
{
    let result = "";
    for (let i = 0; i < n; i++) 
    {
      result += str;
    }
    return result;
}
console.log(repeatTheString("CSK",4));
console.log(repeatTheString("Six",5));
console.log(repeatTheString("JaiHind",6));
  
  