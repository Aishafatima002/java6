//Advanced js
//synchourous programing
//sequence in initiates
// console.log("one");
// console.log("two");
//Asynchorous programing
//that initiates later like set time out
// console.log("start");
// setTimeout(()=>{
//     console.log("hello world");
// },5000);
// console.log("end")
// setInterval(myFun,1000);
// function myFun() {
//     let d=new Date()
//     let a=document.getElementById("demo").innerHTML;
//     d.getHours()+":"+
//     d.getMinutes()+":"+
//     d.getSeconds();
// }
//a call back is a function passan argument to the function
// function sum(a,b) {
//     console.log(a+b)
// }
// function calculator(a,b,sumCallBak) {
//     sumCallBak(a,b)
// }
// calculator(3,5,sum)

// function myDis(something) {
//     document.getElementById("demo").innerHTML=something
// }
// function myCaluculator(sum1,sum2,myCallBack){
//      let sum=sum1+sum2
//     myCallBack(sum)
  
// }
// myCaluculator(12,45,myDis)


// function greet(something) {
//     document.getElementById("demo").innerHTML=something
// }
// function greeting(a,myCallBack){
   
//     myCallBack(a)
// }
// greeting("welocome back",greet)
//callback hell
//a nested callback in function
// let age=19
// if (age>18) {
//     if (age<=60) {
//        console.log("senoir") 
//     }
// }

// function getData(detailed,getNextData) {
//     setTimeout(()=>{
//         console.log("data",detailed)
//         if (getNextData) {
//             getNextData()
//         }
//     },2000);
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             console.log("all rights resrved")
//         })
//     })
// })
//promises
//reject naccept like
// let promises=new Promise((resolve,reject)=>{
//         console.log("i am resolved")
//         reject("some error occurred")
// })


// function myDis(some) {
//     document.getElementById("demo").innerHTML=some
// }
// let myPromise=new Promise((resolve,reject)=>{
//         let a=0;

// if (a==0){
//     resolve("correct")
// }
// else{
//     reject("err")
// }
// })
// myPromise.then(
//     function(value){
//         myDis(value)
//     }
// )

function sum(a,b,c) {
    let sum =a+b+c
    return sum
}
let myPromise=new Promise
