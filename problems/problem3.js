
// Function to multiply each element in an array by a multiplier
function multiplyBy(arr, multiplier) {
  // New array to store the output
  let newArr = [];

  // Loop through input array and multiply each value to get a new array
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] * multiplier;
  }
  return newArr;
}

let inputArr = [12, 5, 3];
let multiplier = 5;
console.log("Input Array: "+inputArr);
console.log("Multiplier: "+multiplier);
console.log(multiplyBy(inputArr, multiplier));
