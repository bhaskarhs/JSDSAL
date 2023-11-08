/*

*/

// const products = ["flowers", "eggs", "yeast"];
// products[3] = 'flour'
// products.push("sugar") //push will allow us to add data at last index of the array
// console.log(products.sort()); //value at 1st location array starts at index 0

//enumerating the arrya means iterating through an array
//forEach doesn't return values it iterate the arrat
//map does return the new array
//both of them doesnot modify the existing the array
//filter also loops through the array and return the value as an array
// reducer when we want to do some math operation
//deep copy and shallow copy

/*deleting the values in the array
    pop() //last value from the array
    delete arrayName[index] will just remove the delete and the empty slot is created at that particular index given 
    split() //
    slice() with values

*/
const products = ["eggs", "yeast"];
const nums = [12, 34, 45];

let presult = products.forEach((value, index, array) => {
  console.log(value.toUpperCase());
  return value;
});

console.log(products);

let result = nums.map((value, index, array) => {
  return value + 1;
});

const filterNums = nums.filter((value, index) => {
  console.log(index);
  return value < 40;
});

const sumOfArray = nums.reduce(
  (prevValue, currentValue, currentIndex, array) => prevValue + currentValue,
  0
);
console.log("reducer", sumOfArray);

console.log(filterNums, nums);

console.log(result, nums);

//removing the duplicate
const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDup = arr1.filter((value, index, array) => {
  return array.indexOf(value) === index;
});

console.log(removeDup);

// 6.1Find Missing Number
// 2Find Maximum and Minimum Values

//multi dimensional array and example
const mproducts = [
  [2, 1, 4, 23],
  [52, 67],
];
// console.log(mproducts[0][2]);
//looping over the multi dimension array

mproducts.forEach((value) => {
  value.forEach((l) => console.log(l + 2));
});

let array1 = [
  [1, 2],
  [3, 4],
];

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < i; j++) {
    const temp = array1[i][j];
    array1[i][j] = array1[j][i];
    array1[j][i] = temp;
  }
}
console.log(array1);
