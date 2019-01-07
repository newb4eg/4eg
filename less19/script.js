"use strick";
//variable declarations and their types.
var number = 5; // type Integer
var string = "Text"; // type String
var sym = Symbol(); // type Symbol
var boolean = true; // type Boolean {true: false}
null; // no reference
undefined; // is not set
var obj = {}; // object :)

let person = { // variable object person for example
    name: "Jhon",
    age: 8,
    isMarried: false
};
console.log(person["isMarried"]); //output in console "false"

let arr = ['lan.png' , 'many.jpg', 'symbol.mp3']; // array list 
console.log(arr[2]); // output in console "symbol.mp3"

//alert("Hello World!");
//let answer = confirm("are you crazy?");
//console.log(answer);
let answer = prompt("Есть ли Вам 18?", "Да");
console.log(typeof(answer));