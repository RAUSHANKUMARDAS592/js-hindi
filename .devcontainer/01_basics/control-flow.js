//"==" checks only value

if(2 == "2"){
    console.log("exected");
}

//"===" checks types of data
if(2 === "2"){
    console.log("exected");
}
console.log("not executed");

console.log("===========================================");
const temp = 44;
if(temp>=50){
    console.log("High Temprature");
    
}else if(temp<=50 && temp>=30){
    console.log("It is Medium");
    
}
else{
    console.log("low temprature");
    
}
console.log("============================================");

const userLoggedIn = true;
const userDebitCard = true;

if(userLoggedIn && userDebitCard){
    console.log("You are eligible fo shoping");
}else{
    console.log("you are not eligible for shoping");
    
}
//Switch case 
console.log("===========================");
const number = 3;

switch(number){
     case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("Mar");
        break;
    default:
        console.log("Not matched");
        break;     
        
        
}

