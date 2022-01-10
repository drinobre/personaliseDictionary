// Creating Array

let arrayNumber = [2, 2, 3, 4, 5];
let arrayString = ["a", "b", "c", "d", "e"];

// Reassinging an array value

arrayNumber[0] = 1;
console.log({ Reassigning: arrayNumber });

//METHODS
//Adding elements to an array using push() and unshift()

//Push - Add element in the end of the array
arrayNumber.push(6, 7, 8, 9);
console.log({ Push: arrayNumber });

function addElement(arr) {
  arrayNumber.push(arr);
  return arr;
}

let newArray = addElement([1, 2, 3]);
console.log({ ElementedAdded: newArray, PushFunction: arrayNumber });

// unshift - Add element in the begin of the array
arrayNumber.unshift(-3, -2, -1, 0);
console.log({ Unshift: arrayNumber });

// Remove elements from an array using pop() and shift() - only allows an array to be modified by a single element at a time;
let popped = arrayNumber.pop();
console.log({ ElementPopped: popped, Pop: arrayNumber });

let shifted = arrayNumber.shift();
console.log({ ElementShifted: popped, Shift: arrayNumber });

//Remove item using splice() - remove an element from somewhere in the middle or more than 1 at once;
// Modify the array

const startIndex = 3;
const amountToDelete = 2;
const endIndex = 5;

//remove item
let spliced = arrayNumber.splice(startIndex, amountToDelete);
console.log({ ElementRemovedSpliced: spliced, SplicedRemoved: arrayNumber });

//remove item and add item (works as replace?)
let splicedAdd = arrayNumber.splice(startIndex, amountToDelete, 1, 1.1, 2.1);
console.log({ ElementAddedSpliced: spliced, SplicedAdded: arrayNumber });

//copy items using slice - extract the values into a new array
// don't modify the initial array;

let slice = arrayNumber.slice(startIndex, endIndex);
console.log({ sliceNewArray: slice, sliceArray: arrayNumber });

function sliceNumbers(num1, num2) {
  return arrayNumber.slice(num1, num2);
}

let sliceFunction = sliceNumbers(startIndex, endIndex);
console.log({
  sliceNewArrayFunction: sliceFunction,
  sliceArrayFunction: arrayNumber,
});

// Copy an Array with the Spread Operator
let thisArray = arrayNumber;
let thatArray = [...thisArray];
console.log({ newArray: thatArray, arrayNumber: arrayNumber });

function copyArrayMultipleTimes(arr, num) {
  while (num > 1) {
    arrayString.push([...arr]);
    num--;
  }
  return arrayString;
}

let copyArray = copyArrayMultipleTimes(["a1", "b1", "c1"], 3);
console.log({ newArray: copyArray, arrayString: arrayString });

//Combine an Array with the Spread Operator
let firstName = ["Adriana", "Nobre"];
let lastName = [...firstName, "Cristoforo", "Lawrence"];

console.log(lastName);

//indexOf(). Note it will return -1 if not found

function checkElement(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}

let result = checkElement([1, 2, 3], 1);
console.log(result);

// For loop - not working

function filteredArray(arr, elem) {
  let newArray = [];
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

let filtered = filteredArray([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7], 5.5);
console.log(filtered);

// function filteredArray(arr, elem) {
//   let newArr = [];
//  for (let i = 0; i < arr.length; i++){
//    if (arr[i].indexOf(elem) == -1){
//      newArr.push(arr[i]);
//    }
//  }
//   return newArr;
// }

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
