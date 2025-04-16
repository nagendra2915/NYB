//FUNCTION DECLARIATION

//1.Function with no parameters

function goodmorning()
{
    console.log("Hello , Kurnool!")
}
goodmorning();

//2.Functions with multiple parameters

function product(n,u)
{
    return n * u ;
}
console.log(product(29,15));

//3.Function that returns a boolean

function odd(num)
{
    return num % 2 === 1;
}
console.log(odd(29));

//4.Function with conditional statemnts

function forVote(age)
{
    if (age>=18)
    {
        return "you are eligible.";
    }
    else
    {
        return "You are not eligible.";
    }
}
console.log(forVote(29));
console.log(forVote(15));

//5.Function calling another function

function add(n, u) 
{
    return n + u;
  }
  
  function displaySum(x, y) 
  {
    const result = add(x, y);
    console.log(`The sum is ${result}`);
  }
  
  displaySum(10, 5); 

  //6.Function that work with arrays

  function getElement(arr) 
  {
    return arr[1];
  }
  console.log(getElement([10, 20, 30]));
  console.log(getElement([51, 52, 53]));
  console.log(getElement([28, 29, 30]));
  
  
