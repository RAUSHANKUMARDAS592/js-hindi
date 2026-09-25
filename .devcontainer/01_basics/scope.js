//scope is nothing but a way to write using curly braces {};
//1.Global scope;
let a=10;

function number(num){
    console.log(a);
    
}
number();

console.log("=============================");
function number2(num){
    let b=20;
    console.log(b);
}
number2();
console.log("=============================");

function name1(){
    const name="Raushan"; 

    function name2(){
        const title="Rohit";
        console.log(name);
      
    }
    name2();
    
}

name1();

console.log("=============================");
if(true){
    const name="Rohit";
    if(name === "Rohit"){
        const web="youtube";
        console.log(name);
        console.log(web);
    }
  
    
}
console.log("=============================");
function add(a,b){
    return a+b;
}
console.log(add(3,5));