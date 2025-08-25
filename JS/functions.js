// Functions
/* 
JavaScript functions are named blocks of code that can be executed to perform tasks, take inputs (parameters), and return outputs.

Rules of function names
==========================
1. Don't Start with a underscore eg., _goodStart()
2. Dont start with a numbers eg., 123goodStart()
3. No space b/t the name of the function eg., good Start()
 */

function goodStart(){ //Function
    console.log("Start");
    // document.write("Apples Mango Banana" + "<br>");
}

//function calling
goodStart(); // We can Call the functions many times..
goodStart();
goodStart();


//Arrow Function
let a = 7;
let b = 7;
let my_function = (a,b) => {
    console.log(a*b);
}

my_function(a,b);

// Functions with parameters
let x = "Raju";
let y = 19;
function Main(x,y){
    return `Hello ${x} and ${y}`;
}
console.log(Main(x,y));

