//object iteration
const singer = {
    name: "the weekend",
    age: 29,
    language: "English"
  };
  
  for (const key in singer) {
    if (singer.hasOwnProperty(key)) 
    {
      console.log(key, singer[key]);
    }
  }

//object keys()

const car = {
    brand: "Toyota",
    model: "Innova crysta",
    year: 2022
  };
  
  Object.keys(car).forEach((key) => {
    console.log(key, car[key]);
  });
  //For..in with object.keys()

  const user = {
    name: "surya",
    email: "surya@example.com",
    role: "ASE"
  };
  
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }
  
  