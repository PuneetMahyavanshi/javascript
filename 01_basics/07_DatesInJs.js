let date = new Date()
console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString("hh:mm"));//Doesn't work
// console.log(date.toTimeString());

// console.log(date.getFullYear());
// console.log(date.getMonth()); // 7 but as per index of month actual month is 8

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log(date.setHours(23,55,44,44));
console.log(date);
console.log(date.setMinutes(20,30,30));

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());


console.log(date.getDay());
