//parameters and arguements
//Function with one parameter

function bike(name) 
{
    console.log("My Favourite bike is, " + name + "!");
}
bike("Kawasakhi Z900"); 

//function with multiple parameters

function fullName(firstName, lastName) 
{
    console.log("Full Name: " + firstName + " " + lastName);
}
fullName("Steve", "job");
fullName("Christopher" , "Nolan");

//Default parameter

function movie(name = "Avengers") 
{
    console.log("All time favourite movie is, " + name + "!");
}
movie();           
movie("Interstellar");  

//ES-5 - when a function is called with any number of arguments, JavaScript provides a special built-in object called arguments.

function moviecharacters() 
{
    for (var i = 0; i < arguments.length; i++) 
    {
      console.log(arguments[i]);
    }
  }
  moviecharacters("Captain America", "Iron man", "Hulk man");

  //ES-6 - you use the rest parameter syntax (...) to collect all the extra arguments into a real array

  function carBrands(...args) 
  {
    console.log(args); 
  }
  carBrands("Lamborgini", "Ferrari", "Bugati", "Mercedes Benz", "BMW");

  //fixed and rest parameters
  function respect(title,...names)
  {
      console.log("Title :", ...title);
      console.log("Names :", names)
  }
  respect(" Mr."," Srinivas "," Tarak "," Charan ");

  //hoisting
  //Function hoisting

fruit(); 
function fruit() 
{
  console.log("Avacado!");
}

// Variable hoisting

var x;
console.log(x); 
x = 5;

//closure 

function outer() 
{
    let name = "Iphone";
  
    function inner() 
    {
      console.log("Apple, " + name);
    }
  
    return inner;
}
const mobile = outer();
mobile();

//scope
// global scope

let gadget = "Macbook M4";
function laptop() 
{
  console.log(gadget);
}

//function scope

function food() 
{
    let item = "Biryani";
    console.log(item);
}
  
  



  
  