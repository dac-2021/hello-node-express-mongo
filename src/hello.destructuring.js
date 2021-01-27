// Array Destructuring
const list = ["Delhi", "Kolkata", "Chennai", "Mumbai"];
const city1 = list[1];
const city2 = list[2];
console.log(city1, city2);

const [, c1, c2] = ["Delhi", "Kolkata", "Chennai", "Mumbai"];
console.log(c1, c2);

// Object Destructing
const refObj = { id: 1, title: "Happy Republic Day", city: "Delhi" };
const objTitle = refObj.title;
const objCity = refObj.city;
console.log(objTitle, objCity);

const { title, city } = {
  id: 1,
  title: "Happy Republic Day",
  city: "Delhi",
};
