// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler
var a = [1, 2 , 3, 1, 2, 1]
// var b = {}
// var cnt = 0;
// for(var i of a){
//     if(b[i]){
//         b[i]+=1;
//     }
//     else{
//         b[i] = 1;
//     }
// }
// console.log(b);

// console.log("Welcome to Programiz!");
const c = a.map((i)=>{
    return i = i*2;
})
console.log(c);
const d = a.filter((i)=>{
    return i%2 === 0;
})
console.log(d)
let uni = [];
const e = (a) =>{
    a.forEach((ele)=>{
       if(!uni.includes(ele)){
           uni.push(ele);
       }
   })
   return uni
}
    
console.log(e(a))