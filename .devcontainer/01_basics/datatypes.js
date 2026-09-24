//there are 2 types mainaly
//1.premitive datatype
   //-String
   let string = "Raushan";
   console.log(string);
   console.log(typeof string);
    console.log("**********************************");
   
   //number
   let num = 123;
   console.log(num);
   console.log(typeof num);
    console.log("**********************************");
   
   //boolean
   let isTrue=true;
   console.log(isTrue);
   console.log(typeof isTrue);
    console.log("**********************************");
   
   //undefined
   let number;
   console.log(number);
   console.log(typeof number);
    console.log("**********************************");
   
   //null
   let num1=null;
   console.log(num1);
    console.log("**********************************");
   
//2.non-premitive datatype(reference dtatype)
       //array
       let arr=[1,3,"Raushan"];
       console.log(arr);
       console.log(typeof arr);
       
       console.log("**********************************");
       

       //object
       let myObj={
        name:"Ram",
        email:"r@123",
        number:1020304050
       }
       console.log(myObj);
       console.log(typeof myObj);

        console.log("**********************************");

       //function
       const myFun = function(){
        console.log("hello and welcome JS");
       }
       myFun();
       console.log(typeof myFun);
        console.log("**********************************");

        //primitive(stack) and non-primitive(heap)

        let name="Raushan";
        let newName=name;
        newName="Rohit";
        console.log(name);
        console.log(newName);


        console.log("===============================");

    let userOne = {
       email : "r@gmil.com",
       upi : "user@id",
    }
    let userTwo = userOne
    userTwo.email="a@gmail"

    console.log(userOne.email);
    console.log(userTwo.email);