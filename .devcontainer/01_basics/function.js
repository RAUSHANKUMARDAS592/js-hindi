function loginUserMessage(name){
    if(!name){
        console.log("enter user name");
        return;
    }
    return `${name} just login`;

}
console.log(loginUserMessage("Ram"));

console.log("=================================");
function addCartItem(...items){
    return items;
}
console.log(addCartItem(200,300));

console.log("=================================");
function calculatePrice(value1,value2,...price){
    return price;
}
console.log(calculatePrice(200,355,67,56));//first 2 values are value and remaining price

console.log("=================================");
const userInformation={
    name:"Raushan",
    course:"JFSD",
}

function trackInformation(object){
    console.log(`Hii my name is : ${object.name} and course is ${object.course}`);
    
}
trackInformation(userInformation);
