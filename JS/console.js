// Console

// console in JS is a built in function that gives you the access to tools for logging messages

//1. printing in the form of table using console.table();
// let a = console.table(["Pasula","Laxmi","Narasimha","Raju"]); this prints as a table form in the console.



// 2. Think of it as a “stopwatch” you name—start it before your code, stop it after, and see the lap time!

// Start a stopwatch called 'myLoop'
/* console.time("myLoop");        
for (let i = 0; i < 100; i++) {
  console.log("a");
}
console.timeEnd("myLoop"); */   

// Stops the stopwatch and logs: myLoop: 12.345ms (example output)

//3. Think of console.error() as your "red alert" in JavaScript — it tells you something went wrong but does not stop your code from running.
/* console.error("This is an error message!");
const user = { name: "Alice", age: 25 };
console.error("User data error:", user);
 */


//4. Unlike console.log(), which generally prints the object as a string or a snapshot, console.dir() focuses on showing the object's properties in a tree-like structure that you can expand and explore.

let persons = [
  { name: "Alice", age: 30, address: { city: "Wonderland", zip: 12345 } },
  { name: "Raju", age: 50, address: { city: "Hyd", zip: 500045 } }
];


console.dir(persons, { depth: null });

