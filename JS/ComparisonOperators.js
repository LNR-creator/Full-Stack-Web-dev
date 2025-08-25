/* 
        Comparison Operators
==============================================
1.Relational Operators(4):- >,>=,<,<=
2.Equality and inequality operators(2):- ==,!=
3.Strict Equality and strict inequality operators(2):- === ,!==


while comparing two strings the js checks the ASCII values of the letters in the strings.

ASCII values
============
A-65 B-66 C-67............................Z-90
a-97 b-98 c-99 ............................z-122
*/

console.log("Crocodile">"Parrot"); //False because C-67 and P-80
console.log("C">"B"); //true because C-67 and B-66
console.log("Raju">"Raju");//False because both are equal
console.log("Raju" == "Raju"); //True