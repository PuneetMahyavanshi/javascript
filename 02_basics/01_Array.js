let array = [4,5,6,7]
console.log(array);

array.push(8)
array.push(9)
console.log(array);

array.pop()
console.log(array);

//Inserted at the top but it is avoided because it 
//shifts the array value if we have 1000 element then performance issue
array.unshift(3)
console.log(array);

//Shift removed the first value of an array 
array.shift()
console.log(array);
console.log(array.length);


// if I add element on 9th index and actual length of an array is 5 then,
// It will add the element of 9th index and rest of the element from 5-8 will be 
//<Number_of_item empty item> i.e <4 empty items>
array[9] = 10;

console.log(array);

//Here we have seen 5-8 is empty so how to avoid empty index 
//Below is the code through which we can avoid Empty index
console.log(Object.keys(array));

array.pop()
array.pop()
array.pop()
console.log(array);

//Include is used to check where a element is present in the array 
console.log(array.includes(3)); // false
console.log(array.includes(5)); // true

let array2 = [6,8,9]
console.log(array2.join()); // convert into comma separated string

let ary3 = [0, 1, 2, 3, 4]
console.log(ary3.slice(1,4));
console.log(ary3);

console.log(ary3.splice(1,4));
console.log(ary3);

let marvelHeros = new Array("Thor", "Spiderman","Ironman")// another way to declare array

let dcHeros = new Array("Superman","Batman", "Aquamane")

marvelHeros.push(dcHeros);

console.log(marvelHeros); // Now when I push one array into another it will nested so to remove this me as 
// flat method
let heros = marvelHeros.flat(Infinity)
console.log(heros);

//To get the original state of marvel heros
marvelHeros.pop();
console.log(marvelHeros);

//Another way to do is Concat to array into new one 
let herosCon = marvelHeros.concat(dcHeros, array2)
console.log(herosCon);

//Another way of doing is spread operators
let herosSpread = [...marvelHeros, ...dcHeros]// mostly used pattern

console.log(herosCon);

let name = "Rahul"
console.log(`Name IsArray : ${Array.isArray(name)}`);
console.log(`herosSpread IsArray : ${Array.isArray(herosSpread)}`);

Array.from()
