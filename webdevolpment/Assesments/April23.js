//1.Que

function StudentsGrade(marks) 
{
    return marks >= 90 ? "A" :
           marks >= 70 ? "B" :
           marks >= 50 ? "C" :
           "Fail";
  }
  console.log(StudentsGrade(97));
  console.log(StudentsGrade(77));
  console.log(StudentsGrade(57));
  console.log(StudentsGrade(37));

//2.Que

function factorial(num) 
{
    if (num === 0 || num === 1) 
    {
      return 1; 
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));
console.log(factorial(7));

//7.que

function sumOfSubjects(obj) {
    let sum = 0;
    for (let key in obj) {
      if (typeof obj[key] === 'number') 
     {
        sum += obj[key];
      }
    }
    return sum;
  }
  const marks = {Telugu: 88, Hindi: 81, English: 99};
  const total = sumOfSubjects(marks);
  console.log(total);
  

  
  