//objects - it is a collection of key-value pairs called as properties 
//Creation of an object 

//-->1.object literal way - simple and direct way
let phone = 
{
    name: "Iphone16",
    mobile : function()
    {
        console.log("This is my " +this.name);
    }
};
phone.mobile();

//-->2.Factory function way - a function that returns a new object
function createCar(make, model) 
{
    return {
      make,
      model,
      display: function() {
        console.log("Assemble the " + make + " " + model);
      }
    };
  }
  let car1 = createCar("wolksvagen", "virtus");
  car1.display();
  
//-->3.Constructor Function way - uses this and new keywords to create object

function movie(name,director){
    this.name = name;
    this.director = director;
    this.film = function(){
        console.log("The "  +this.name+  " movie was directed by "  +this.director);
    };
}
let m1 = new movie("Interstellar","Christopher Nolan");
m1.film();

//4.Classical Way - uses the class keyword

class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  
    details() {
      console.log(this.name + " is in grade " + this.grade);
    }
  }
  
  let s1 = new Student("Rashid", 10);
  s1.details();
  