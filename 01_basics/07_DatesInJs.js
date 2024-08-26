let date = new Date()
console.log(date);
// console.log(date.toDateString());
const d = new Date();

// Get a DateTimeFormat object for the user's current culture (via undefined)
// Ask specifically for the long-form of the time zone name in the options
//const dtf = Intl.DateTimeFormat(undefined, {timeZoneName: 'Asia/Kolkata'});

// Format the date to parts, and pull out the value of the time zone name
console.log(`Local Date:${date.toLocaleString()}`);
console.log(`ISO Date:${date.toISOString()}`);

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
