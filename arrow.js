/*
function doubleIt(num){
    return num*2;
}
*/

// const doubleIt =function myFun(num){
//     return num*2;
// }

const doubleIt=num=>num*2;
const add =(x,y)=>x+y;
const give5=()=>5;
const calculator=(x,y)=>{
    const sum=x+y;
    const sub=x-y;
    const output=sum*sub;
    return output;
}
const result=doubleIt(5)
const result1=add(5,10)
const result2=give5()
const result3=calculator(7,5)
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);