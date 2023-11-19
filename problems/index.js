// count the number of occurrences of a value in a list
// const map1 = new Map();
// const arr = [1, 4, 3, 2, 5, 1, 4, 2, 3, 1, 5, 1, 3, 2];
// for (var i = 0; i < arr.length; i++) {
//   if (map1.has(arr[i])) {
//     map1.set(arr[i], map1.get(arr[i]) + 1);
//   } else {
//     map1.set(arr[i], 1);
//   }
// }

// console.log(map1);

// // A set A is a subset of a set B if every element in A is also in B.
// const map2 = new Map();

// const arr1 = [1, 3, 5, 7, 9];
// const arr2 = [1, 3, 5];

// for (var i = 0; i < arr1.length; i++) {
//   if (!map2.has(arr1[i])) {
//     map2.set(arr1[i], arr1[i]);
//   }
// }

// var isSubset = true;

// var i = 0;

// while (i < arr2.length && isSubset) {
//   if (!map2.has(arr2[i])) {
//     isSubset = false;
//   }

//   i++;
// }

// console.log(isSubset);

//removing duplicates
/*
input: list of values
ouput:A new List of values with no duplicates
*/

//intercept calculation
//input:2 list of  values
//output: the interceptor of 2 list only common values

var list = [1, 2, 3, 3, 4, 5, 6, 2, 1, 10, 12, 0, 1, 1];
var map = new Map(); //inbuilt hashtable
let uniquelist = [];

for (let i = 0; i < list.length; i++) {
  if (!map.has(list[i])) {
    uniquelist.push(list[i]);
    map.set(list[i], list[i]);
  }
}

console.log(uniquelist.sort((a, b) => a - b));
console.log(map);

let list1 = [1, 2, 3, 4, 5, 6]
let list2 = [4, 3, 6, 7, 2]
//expected output 3,4,5,6,2

let unionMap = new Map()
