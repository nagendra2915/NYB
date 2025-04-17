//FUNCTION DECLARIATION

//1.Function with no parameters

function goodmorning()
{
    console.log("Hello , Kurnool!")
}
goodmorning();

//

function environment()
{
    console.log("Save Trees , Save Earth")
}
environment();

//2.Functions with multiple parameters

function product(n,u)
{
    return n * u ;
}
console.log(product(29,15));

//

function division(p,q)
{
    return p/q ;
}
console.log(division(500,5));

//3.Function that returns a boolean

function odd(num)
{
    return num % 2 === 1;
}
console.log(odd(29));
console.log(odd(38));

//
function even(n)
{
    return n % 2 === 0;
}
console.log(even(98));
console.log(even(29));

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
  
  
