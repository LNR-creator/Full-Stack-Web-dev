//                          -- Primitive Data types -- 

/* Number */
let n1 = 2;
let n2 = Infinity;
let n3 = 'Something'/2;

console.log(n1); // 2
console.log(n2); // Infinity
console.log(n3); // NAN (Not a Number)

/* String */
let s1 = "Pasula";
let s2 = "Laxmi";
let s3 = 'Narasimha';
let s4 = "Raju";
let s5 = `My name is ${s1} ${s2} ${s3} ${s4}`;
console.log(s5);

/* Symbols(Introduced in ES6) */
let a = Symbol('Raju');
let b = Symbol('Raju');
let c = 'Raju'
let d = 'Raju'
console.log(a == b); // false because the symbol makes them unique so a and b strings are different
console.log(c == d); // true beacause the c and d strings are same

/* BigInt (Introduced in ES2020) */
let big = BigInt('111');
console.log(big);

//                          -- Non-Primitive DataTypes --

/* 1. Object */
let Person = {
    Person_name : "Raju",
    Roll_no : '24951A05G0'
}
console.log(Person.Roll_no);

/* 2. Arrays */
let a1 = [1, 2, 3, 4, 5];
console.log(a1);
let a2 = ['Raju',1,2,'24951A05G0']
console.log(a2);

/* FUnctions */

function display(name) {
    return 'My name is '+ name ;
}
console.log(display("Raju"))

/* Date object */

let currentDate = new Date();
console.log(currentDate);

