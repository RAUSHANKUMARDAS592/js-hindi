const mySymb=Symbol("hii");

const data={
    [mySymb]:"neySymbol",
    name:"Raushan",
    email:"r@gmail.com",
    number:9508434926,
}
console.log(data.name);
console.log(data["email"]);
console.log(data[mySymb]);

