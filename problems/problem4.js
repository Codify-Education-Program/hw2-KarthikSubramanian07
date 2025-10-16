// Problem 4: indexAndConcat
// Prefix each string with its index ("0Hello!")

function indexAndConcat(arr) {
  // Create a new array attribute 
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = i + arr[i]; //Concatenate the index
  }
  // Return the new array object which has the concatenated elements
  return newArr;
}

console.log("Input Array: "+(["Hello", "World"]));
console.log("New Array: "+indexAndConcat(["Hello", "World"]));
console.log("----")
console.log("Input Array: "+(["Hello", "World", "My", "Name", "Is", "Karthik"]));
console.log("New Array: "+indexAndConcat(["Hello", "World", "My", "Name", "Is", "Karthik"]));
