const number = 100;
console.log(number);

const num2 = new Number(200);
console.log(num2);

console.log(num2.toString());
console.log(num2.toString().length);
console.log(num2.toFixed(2));
console.log(num2.toPrecision(3));

console.log("==================");
const hundreds = 100000;
console.log(hundreds.toLocaleString('in-EN'));
console.log(hundreds.toLocaleString('en-IN'));


console.log("==================");
//============================MATHS===============================
console.log(Math);
console.log(Math.abs(-4));//it converts -ve to +ve value
console.log(Math.round(4.5));//after or same .5 it will increase like 5
console.log(Math.round(4.2));//before .5 it will decrease
console.log(Math.round(4.8));//
console.log(Math.floor(4.5));//after . any decimal number decrease like 4
console.log(Math.ceil(4.5));//after . any decimal number increase like 5
console.log("==================================");
console.log(Math.sqrt(4));
console.log(Math.min(4.5,3,5,4));
console.log(Math.max(4.5,3,5,4));
console.log("==================================");
console.log(Math.random());//it will come any random value between 0 and 1
console.log((Math.random()*10)+1);//it will give more than one and less than 10 any random value

