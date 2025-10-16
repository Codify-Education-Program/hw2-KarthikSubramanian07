// Problem 6: Are People Objects?
// Combine names[] and ages[] into an array of { name, age }

function namesAndAges(names, ages) {
  //Create an empty array object
  let arr = [];
  //Loop through the input names one by one
  for (let i = 0; i < names.length; i++) {
    //Create the json object with name and age
    arr[i] = { name: names[i], age: ages[i] };
  }
  //Return the array object
  return arr;
}


let names = ["Taylor", "Jake"];
let ages = [20, 29];
console.log("Names: "+names);
console.log("Ages: "+ages);
console.log("Output Array: ");
console.log(namesAndAges(names, ages));
