[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/WCTQlTRG)

# 🧠 Assignment 1 — JavaScript Fundamentals

Welcome to your first assignment for Full-Stack Development!  
You’ll be practicing **core JavaScript concepts**: arrays, objects, loops, functions, and basic logic.

---

## ⚙️ Setup

Make sure you have **Node.js (v18 or later)** installed.  
You can check by running:

```bash
node -v
````

Clone or download this repo, then open the folder in VS Code.

---

## 🚀 Running Your Code

Each problem is in its own file inside the `problems/` folder:

```
/problems
├── Problem1.js
├── Problem2.js
├── Problem3.js
├── Problem4.js
├── Problem5.js
├── Problem6.js
└── Problem7.js
```

To run a single file, use:

```bash
node problems/Problem1.js
```

You’ll see example console outputs at the bottom of each file — use those to test your function.

---

## 📚 Problems Overview

### 🧩 Problem 1 — `printIndex`

Write a function that takes an index and an array, and returns
`"Value at index (index) is (value)"`.

Example:

```js
printIndex(2, [5, 10, 15, 20]);
// "Value at index 2 is 15"
```

---

### 🧩 Problem 2 — `largestMystery`

Given an array of numbers and a function `mysteryFunc`,
return the **largest number** that causes `mysteryFunc` to return `true`.

If none do, return `"No number passes the function!"`.

---

### 🧩 Problem 3 — `multiplyBy`

Return a new array where each number is multiplied by the given multiplier.

---

### 🧩 Problem 4 — `indexAndConcat`

Return a new array where each string is **prefixed with its index**.

Example:

```js
["Hello", "World"] → ["0Hello", "1World"]
```

---

### 🧩 Problem 5 — `uppercaseStringsContainingWaldo`

Return an array of strings containing the lowercase `"waldo"`,
but make them **ALL CAPS**.

Example:

```js
["Where is waldo?", "WalDo is here"] → ["WHERE IS WALDO?"]
```

---

### 🧩 Problem 6 — `namesAndAges`

Given arrays of names and ages, return an array of objects:

```js
names = ["Taylor", "Jake"];
ages = [20, 29];

→ [
  { name: "Taylor", age: 20 },
  { name: "Jake", age: 29 }
]
```

---

### 🧩 Problem 7 — `doubleAge`

Given a stringified object:

* Parse it to an object.
* If it has an `age`, **double it**.
* If not, **add** `age: 0`.

Example:

```js
'{"name":"Ariana","followers":1000000}'
→ { name: "Ariana", followers: 1000000, age: 0 }
```

---

## ✅ Tips

* Use `console.log()` to check your progress often.
* Avoid copying code — write from scratch and test iteratively.
* Focus on understanding **loops**, **array methods**, and **object manipulation**.
* Comment your logic — clarity matters.

---

## 🧩 Optional: Testing Locally

If you want to test your functions automatically,
uncomment the `module.exports` lines and use the provided `tests/` folder.

Then run:

```bash
node --test
```

---

### 💪 Goal

By the end of this assignment, you should be comfortable writing and reasoning about:

* JavaScript variables (`let`, `const`)
* Functions
* Arrays and loops
* Objects and key/value access
* Conditional logic
* Modular code

---

### 🏁 Submission

Push your completed `.js` files to your GitHub Classroom repository before the deadline.
