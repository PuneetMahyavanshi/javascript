//Primitive datatype
// 7 datatypes => String, Number, Boolean, null, undefined, BigInt, Symbol

const name = "Rj"
const score = 55
const isPassed = true
const emptyMem = null
const symbol1 = Symbol("123");
const symbol2 = Symbol("123");
let motherName;// as const cannot be undefined
const randomNumber = 387504503450340583093453534898998456987458976948576984n

console.log(typeof name);
console.log(typeof score);
console.log(typeof isPassed);
console.log(typeof emptyMem);
console.log(typeof symbol1);
console.log(typeof randomNumber);
console.log(symbol1);
console.log(symbol2);
console.log(symbol1=== symbol2);

//NonPrimitive data type 
//array, object, function
const heros = ['Shaktiman', 'krish', 'Flying Jet']
const person = {
    name:"Raj",
    age:19
}
const printer = function()
{
    console.log("Hello world");
    
}
console.log(typeof heros)
console.log(typeof person)
console.log(typeof printer)
