//map()
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

//map()-extracting object properties
const players = [
    { name: 'Dhoni', jerseyNo: 7 },
    { name: 'Rohit', jerseyNo: 45 }
  ];
  const names = players.map(player => player.name);
  console.log(names); 

//weakmap()
const weakMap = new WeakMap();
let obj = { name: 'Alice' };
weakMap.set(obj, 'Engineer');
console.log(weakMap.get(obj)); 
console.log(weakMap.has(obj)); 

weakMap.delete(obj);
console.log(weakMap.has(obj));

