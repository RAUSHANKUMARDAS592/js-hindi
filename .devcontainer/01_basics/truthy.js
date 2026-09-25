const email = "rau@gmail.com";

if(email){
    console.log("exist");
}else{
    console.log("not exist");
    
}
//falsy value
//false,non,undifined,0,empty,-0,bigint


//truthy value
//"0","false",[],{},function(){}

//Nulish coaliscing operator ??: undefined
let val1;
//val1=5 ??10;
//val1=null ?? 10;
//val1=undefined ?? 10;
val1=undefined ?? 10 ?? 15;
console.log(val1);

console.log("=======================================")


//ternery operator
//condition ? true : false
const icePrice=10;
icePrice <=80 ? console.log("less price") : console.log("More price");
