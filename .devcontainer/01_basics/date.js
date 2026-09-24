let myDate = new Date();
console.log(myDate.toString());//Thu Sep 24 2026 12:38:06 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Thu Sep 24 2026
console.log(myDate.toLocaleString());//9/24/2026, 12:42:31 PM
console.log(myDate.toLocaleDateString());//9/24/2026

let myDate1 = new Date("2002-05-01");
console.log(myDate1);//2002-05-01T00:00:00.000Z


let myTime = Date.now();
console.log(myTime);
console.log("=========================");

console.log(Date.now());//it gives in second
console.log(Math.floor(Date.now()/1000));//it gives in milli second





