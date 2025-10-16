// Problem 2: largestMystery
// Given an array and a boolean function, return the largest number
// that returns true when passed into that function.
// If none, return "No number passes the function!"


function largestMystery(arr, mysteryFunc) {
  //Default message to return
  let output = "No number passes the function!";

  
  // Loop through each element
  for (let i = 0; i < arr.length; i++) {
    // Check if the current number passes the mystery function
    if (mysteryFunc(arr[i])) {
      //First time
      if (output === "No number passes the function!") {
        output = arr[i];
      } else if (arr[i] > output) { //Subsequent time: compare the current value with output value
        output = arr[i];
      }
    }
  }

  // Return the output variable
  return output;
}

//Return true for even number
function isEvenNumber(n) {
  return n % 2 === 0;
}

//Return true for odd number
function isOddNumber(n) {
  return n % 2 !== 0;
}

console.log("Even Mystery:"+largestMystery([3, 8, 5, 12, 7], isEvenNumber));
console.log("Odd Mystery:"+largestMystery([14, 24, 15, 122, 77, 88, 0], isOddNumber));
