
//1. basics of array in js

let nums = [1, 2, 3];
nums.push(4); // [1, 2, 3, 4] -> Add to end
nums.unshift(0); // [0, 1, 2, 3, 4] -> Add to start
nums.pop(); // removes last element
nums.shift(); // removes first element
console.log(nums);
console.log("=====================================");



let notifications = [
    "New message from John",
    "Your order has been shipped",
    "Sale ends tonight!"
];

notifications.forEach(msg => {
    console.log(`📢 ${msg}`);
});
console.log("=====================================");


//printing the array elements using for loop 
let users = ["Pasula", "laxmi", "Narasimha"];
for (let i = 0; i < users.length; i++) {
    console.log(i+" " +users[i]);
}
console.log("=====================================");

//printing the array elements using forEach loop (pro method)

let friends = ["DCK","Kodi","Pardhu","Thapan","Sunny","MP","Rotha"];
friends.forEach(i => 
    console.log(i)
);
console.log("=====================================");

// Transforming data

let prices = [100 ,200, 300];
let discounted = prices.map(i => i * 0.9);
console.log("Discounted prices : "+discounted);

console.log("=====================================");


//Filtering from an array
let scores = [45, 78, 88, 32];
let passed = scores.filter(score => score >= 100);
if(passed.length == 0){
    console.log("empty score");
}
else{
    console.log(passed); 
}
console.log("=====================================");

//Finding in the array
let products = ["phone", "laptop", "tablet"];
let found = products.find(i => i === "iphone");
console.log(found);// undefined because there is no product "iphone"

//sorting in the array

let numbers = [5, 2, 9, 1];
numbers.sort((i,j)=> i-j); 
console.log(numbers); 

//



