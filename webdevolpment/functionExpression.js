//FUNCTION EXPRESSION 

//Function expression

const fam = function(quote) 
{
    return `My dad ${quote}!`;
};
console.log(fam("is my HERO")); 

  //Anonymous function expression

  const hitSix = function() 
  {
    console.log("Dhoni hits a six!");
  };
  hitSix(); 

  //Function expression with conditional logic

  const circusEntry = function(age) 
  {
    return age >= 10;
  };
  console.log(circusEntry(21));
  console.log(circusEntry(6)); 

  //Function expression stored in an object

  const sum = { add: function(a, b, c) 
    {
      return a + b + c;
    }
  };
  console.log(sum.add(7, 3, 19)); 
  
  //Function Expression Passed as Argument

  function ipl(task)
  {
    task();
  }
  const player = function() 
  {
    console.log("Dhoni is the only uncapped player lead the CSK as Captain in the IPL history!");
  };
  ipl(player); 
  
  
  
  


  