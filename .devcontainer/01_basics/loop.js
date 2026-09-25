// let array=[1,2,3,4,5];

// for (let i = 0;i < array.length;i++) {
//     const element = array[i];
//if(i ==5){
    //console.log("break");
    //break;
    //continue;
//}
//console.log(element);
    
// }

// let num=0;
// while(num<=10){
//     console.log(num);
//     num++;
    
// }
// let array=[1,3,5,4,7,7];
// let i=0;

// while(i<array.length){
//     console.log(array[i]);
//     i++;
    
// }

//do while loop
// let score=1;

// do{
//     console.log(score);
//     score++;
    

// }while(score<=10);

//for of loop
// const array=[1,3,4,6,7,3];
// for (const element of array) {
//     console.log(element);
    
// }

//Map
const map = new Map();
map.set('IN', "India");
map.set('usa',"united state of america");
map.set('fr',"franch");

for (const [key,value] of map) {
console.log(key, '-', value);

    
}
//console.log(map);//it not takes duplicate value