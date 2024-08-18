let score = "55"

console.log(score);
console.log(typeof score);

let numberScore = Number(score);
console.log(numberScore);
console.log(typeof numberScore);

// 55 => number 55

let highScore = "70highScore"
console.log(typeof highScore);
let nHighScore = Number(highScore);
console.log(typeof nHighScore);
console.log(nHighScore);

//"70highScore" => will get converted to number but as NaN

let isHighScore = true 
console.log(typeof isHighScore);
let bHighScore = Number(isHighScore)
console.log(typeof bHighScore);
console.log(bHighScore);

//true => 1; false => 0

//
let isAdult = 1
let boolisAdult = Boolean(isAdult)
console.log("****Number to Bool****");
console.log(boolisAdult);
console.log(typeof boolisAdult);

//

let empty = ""
let notEmpty = "Hello world"
let booleanEmpty = Boolean(empty)
let boolNotEmpty = Boolean(notEmpty)

console.log("****string to Bool****");
console.log(booleanEmpty);
console.log(typeof boolisAdult);
console.log(boolNotEmpty);
console.log(typeof boolNotEmpty);






