const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[2]);


let arr2 = new Array(1,4,6,4);
console.log(arr2);
console.log("=============================");

//Methods
let array2 = new Array(1,4,3,5,7);
console.log(array2);
array2.push(3);// last to add

console.log(array2);
//====================
array2.pop(3);
console.log(array2);//last to remove
//========================
array2.unshift(12);
console.log(array2);//add to first
array2.shift();// first to remove
console.log(array2);
//================

console.log(array2.includes(100));//false

console.log("============================");
let number = [1,3,4,5,6,7];

let result = number.slice(0,3);// it does not change the actual value
console.log(result);
console.log(number);

console.log("==========================");
let result2 = number.splice(0,3);//it change the actual value

console.log(result2);
console.log(number);







