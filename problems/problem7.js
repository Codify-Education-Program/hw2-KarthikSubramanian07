// Problem 7: We're all getting older
// Parse a stringified object.
// If "age" exists, double it; otherwise add age = 0.

function doubleAge(str) {
  //Parse the inptu string to Json object
  let jsonStr = JSON.parse(str);
  if (jsonStr.age !== undefined) { //If Json object has age element, multiply it by 2
    jsonStr.age = jsonStr.age * 2;
  } else { //If Json object does not have age element, default age to zero
    jsonStr.age = 0;
  }
  return jsonStr;
}


let input = '{"name":"Ariana","followers":1000000}';
console.log("Input: "+input)
console.log("Output: ");
console.log(doubleAge(input));

console.log("---")

input = '{"name":"Ariana","age":18, "followers":1000000}';
console.log("Input: "+input)
console.log("Output: ");
console.log(doubleAge(input));