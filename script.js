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
// // console.log("end")
// setInterval(myFun,1000);
// function myFun() {
//     let d=new Date();
//     document.getElementById("demo").innerHTML=
//      d.getHours()+":"+
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
//is also called pyramid of dome
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
//     },4000);
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

// function sum(some) {
   
//     document.getElementById("demo").innerHTML=some
   
// }
// let myPromise=new Promise((resolve,reject)=>{
//     let a=10;
//     let b =30;
//     let c=35;
//     if (a+b+c===75) {
//         resolve("correct answer")
//     }
//     else{
//         reject("err")
//     }
// })
// myPromise.then(
//     function(value){
//         sum(value)
//     }
// )
// thien is used for resolve//catch is used for  reject
// let complete=true

// let prom=new Promise(function (resolve,reject) {
//     if (complete) {
//         resolve("Iam sucess")
//     }
//     else{
//         reject("Iam failure")
//     }
// })
// console.log(prom)
// let prom=new Promise((resolve, reject) => {
//     let x="hello world";
//     let y="hello world";
//     if(x===y){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })

// prom.then(function () {
//     console.log("Iam resolved")
// })
// .catch(()=>{
//     console.log("Iam reject")
// })



// let prom=new Promise((resolve, reject) => {
//     let x="hello world";
//     let y="hello world";
//     if(x===y){
//         resolve( "Iam resolved")
//     }
//     else{
//         reject("Iam failure")
//     }
// })
// prom.then((message)=>{
   
//     document.getElementById("demo").innerHTML=message
// })
// .catch((err)=>{
  
//     document.getElementById("demo").innerHTML=err
// })
// function prom(complete) {
//     return new Promise((resolve, reject) => {
//         console.log("fetching data,please wait")
//         setTimeout(()=>{
//             if (complete) {
//                 resolve("iam suceesful")
//             }
//             else{
//                 reject("iam fail")
//             }
//         },1000)
      
    
//     })
   
// }
// let unFull=(result)=>{
//     console.log(result)
// }
// let reject=(error)=>{
//     console.log(error);
// }
// prom(true).then(unFull);
// prom(true).then(reject);
// let sum=a/b
// function prom(a,b) {
//     return new Promise((resolve, reject) => {
//         console.log("fetching data")
//         setTimeout(()=>{
//             if (sum) {
//                 resolve("your answer:"+sum)
//             }
//             else{
//                 reject("failed to calculate")
//             }
//         })
//     },1000)
// }
// prom(10,5).then((result)=>{
//     console.log(result)
// })
// prom(10,5).catch((error)=>{
//     console.log(error)
// })

