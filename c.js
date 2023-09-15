// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler
// // Write a function to find the second-highest number in an array of integers.

// // var a = [1, 2, 6, 5]
// // var sMax = a[0], max = a[1];
// // for(var i of a){
// //     if(i > max){
// //         max = i;
// //     }
// //     if(i > sMax && i < max){
// //         sMax = i;
// //     }
// // }
// // console.log(sMax);
// // Write a function that takes a string and returns the most common character in the string
// var a = "aaabbbbcc"
// var b = {}
// for(var i of a){
//     if(b[i]){
//         b[i]+=1;
//     }
//     else{
//         b[i] = 1;
//     }
// }
// console.log(b);
// var ans = -1;
// // for(var i of b){
// //     if(ans > i){
// //         ans = i;
// //     }
// // }
// for(var i of a){
//     if(ans < b[i]){
//         ans = b[i];
//     }
// }
// console.log(ans);
// // // Write a function that takes in an array of integers and returns the two numbers that add up to a specific target value. The function should return null if there are no two numbers that add up to the target value.
// // const arr = [1, 2, 4, 3];//target = 5
// // var target = 5;

// function targetSum(arr){
//     var x = []
//     var obj = {}
//     var key = 0
//     for(var i = 0; i < arr.length - 1; i++){
//         for(var j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] == target){
//                 x[0] = arr[i];
//                 x[1] = arr[j];
//                 // console.log(x[0], x[1])
//                 // console.log(x)
//                 obj[key] = x
//                 key++;
//             }
//         }
//     }  
//     return obj;  
// }
// console.log(targetSum(arr))
// // Write a function called sortArrayBySum that takes in an array of arrays of numbers and returns a new array of arrays sorted by the sum of their values. The arrays in the output array should be sorted in ascending order based on their sums

// var arr = [[1, 2], [6, 5], [2, 3]]// 3, 5, 11
// const sortArrayBySum = ()=>{
//     const a = arr.map((i)=>{
//         return i + arr.map((j)=>{
//             return j;
//         })
//     })
//     console.log(a);
// }
// sortArrayBySum(arr)
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// const obj = {
//     name: "Devansh",
//     surname: "Nirmal",
//     Role: "SDE 1"
// }
// for(var i in obj){
//     console.log(obj[i]);
// }

// console.log("Welcome to Programiz!");
// function targetSum(arr, target) {
//     var x = [];
//     var obj = {};
//     var key = 0;
    
//     for(var i = 0; i < arr.length - 1; i++) {
//         for(var j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target) {
//                 x[0] = arr[i];
//                 x[1] = arr[j];
//                 obj[key] = {...x};
//                 key++;
//             }
//         }
//     }  
//     return obj;  
// }

// // Define the target value and the array
// const target = 10; // Replace with your target value
// const arr = [2, 4, 6, 8, 3, 7]; // Replace with your array

// console.log(targetSum(arr, target));
function sortArrayBySum(arrays) {
    // Use the Array.prototype.sort() method to sort the arrays based on their sums
    return arrays.sort((a, b) => {
      // Calculate the sum of elements in array 'a'
      const sumA = a.reduce((acc, val) => acc + val, 0);
  
      // Calculate the sum of elements in array 'b'
      const sumB = b.reduce((acc, val) => acc + val, 0);
  
      // Compare the sums and return the comparison result
      return sumA - sumB;
    });
  }
  console.log(sortArrayBySum([[1, 6], [5, 1], [2, 2]]))
