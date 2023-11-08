/*
initilize and declare an object
object is special type of variables
we can store custom data into it
we can create our own datastructure.
methods : methods are actions performed on object properties
properties an object is a data structure that stores a collection of properties

for-in and for-off we use them to loop over the objects
insted of index we use property name to get the value of object property








shallow copy and deep copy of object

*/

const products = {
  pName: "computer",
  price: 23,
};

products.pName = "laptop";

for (property in products) {
  console.log(property);
  console.log(products[property]);
}

console.log(products);

