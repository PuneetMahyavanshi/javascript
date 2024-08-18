//Only want important comparision
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null >= 0);
// The reason is that an equality check == and comparision > <>= <= works differently
// Comparision convert the null to 0 and treating it as 0 so that is why the 3 one is true 

//mostly we have to stay away from such kind of comparision, it is ok if we are comparing 
//with same datatype but not ok of these kind of comparision null or string to number comparision
