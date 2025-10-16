// Problem 5: Where's Waldo?
// Return strings containing lowercase "waldo", all in uppercase.

function uppercaseStringsContainingWaldo(arr) {
  // Create a new array object to return
  let newArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    let text = arr[i];
    //If the array element contains waldo, make it uppercase and add to new array
    if (text.includes("waldo")) {
      newArr[j] = text.toUpperCase();
      j = j + 1;
    }
  }
  //Return new array object
  return newArr;
}

let inputArray = ["Where is waldo?", "WalDo is here", "hello world", "how are you?", "Hello waldo!", "What's up Waldo?"]
console.log("Input Array:"+(inputArray));
console.log(uppercaseStringsContainingWaldo(inputArray));