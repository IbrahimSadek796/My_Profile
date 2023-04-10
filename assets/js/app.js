// let var Const 

import test from "./scriptModule.js"

// function test(){
//     console.log('Hello');
// }

// test()


// let test = function(){
//     console.log("Hello");
// }
// test()

// (function(){console.log('Hello')}) () // self Invoked function

// let num1 = Number(prompt('Enter First Num'))
// let num2 = Number(prompt('Enter Second Num'))


// function getAvg(x,y){
//     let nums = x + y;
//     let avg =nums/2
//     console.log(avg);
// }

// getAvg(num1,num2)
// --------------------------------------
// This 

// let person= {
//     name : 'Ahmed',
//     age:28, 
//     salary: 4000,
//     clacSalary:function(){
        
//         tax=()=> this.salary *.1
//         return this.salary - tax()
//     }
// }

// console.log(person.clacSalary());

// let x = ()=>console.log('Arrow');
// x()


// function test(){
//     console.log(this);
// }
// test()

// let human = {
//     eat:function(meal){
//         console.log(`Will To Eat ${meal}`);
//     },
//     person:{
//         name:'Ahmed',
//         age:25,
//         wife:{
//             x:this,
//             wname:'Mai',
//             wage:20,
//         }
//     }
// }
// human.person.wife.test()
// -----------------------------------------
// DOM => Document Object Model 
// let changeBtn =document.getElementById('changeBtn')
// Ex 1 
// changeBtn.addEventListener('click' ,function(){
//     let r = Math.round( Math.random()*255)
//     let g = Math.round( Math.random()*255)
//     let b = Math.round( Math.random()*255)
//     document.body.style.backgroundColor = `rgb(${r} ,${g} , ${b})`
// })

// Ex2 
// let timer = document.querySelectorAll('span')
// changeBtn.addEventListener('click' ,function(){
//     let value = Math.round(Math.random()*5000 )+`M`
//     for (let i = 0; i < timer.length; i++) {
//         timer[i].innerHTML =value
//     }
// })


// function random(){
//     let value = Math.round(Math.random()*5000 )+`M`
//     for (let i = 0; i < timer.length; i++) {
//         timer[i].innerHTML =value
//     }
// }

// changeBtn.addEventListener('click',function(){
//     clearInterval(x)
// })
// let x =setInterval(random , 1000)


// ----------------------
// EX 3  ==> BOM
// let changeBtn =document.getElementById('changeBtn')

// changeBtn.addEventListener('click' ,function(){
//     window.location.assign('Movies.html')
// })


// -------------------------------
// localStorage 
// let Submit =document.getElementById('Submit')
// let fname =document.getElementById('fname')
// let password =document.getElementById('password')
// let user =[]

// if (localStorage.getItem('data')!== null){
//     user=JSON.parse(localStorage.getItem('data'))
// }

// localStorage.getItem('data')!== null ? user=JSON.parse(localStorage.getItem('data')):''


// Submit.addEventListener('click' ,function(){
//     let userData ={
//         userName:fname.value,
//         password:password.value,
//     }
//     user.push(userData)
//     localStorage.setItem('data',JSON.stringify(user))
// })
// ------------------------------------------

let myHttp =new XMLHttpRequest()
// myHttp.open( `GET`, `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4533b57921c3449fa65829b267c4e5d0`)
// myHttp.send()
// myHttp.addEventListener('readystatechange' ,function(){
//     if( myHttp.readyState == 4){

//         console.log(JSON.parse(myHttp.response).articles);
//     }
// })

// function getBusiness(){
//     return new Promise(function(callBack){
//         myHttp.open( `GET`, `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4533b57921c3449fa65829b267c4e5d0`)
// myHttp.send()
// myHttp.addEventListener('readystatechange' ,function(){
//     if( myHttp.readyState == 4){
//         console.log(JSON.parse(myHttp.response).articles);
//         callBack()
//         console.log('Business');
//     }
// })
//     })
// }



// function getSports(){
//     return  new Promise(function(callBack){
//         myHttp.open( `GET`, `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4533b57921c3449fa65829b267c4e5d0`)
//         myHttp.send()
//         myHttp.addEventListener('readystatechange' ,function(){
//             if( myHttp.readyState == 4){
//                 console.log(JSON.parse(myHttp.response).articles);
//                 callBack()
//                 console.log('Sports');
//             }
//         })
//     })
   
// }




//     function getHealth(){
//         return new Promise(function(callBack){
//             myHttp.open( `GET`, `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=4533b57921c3449fa65829b267c4e5d0`)
//             myHttp.send()
//             myHttp.addEventListener('readystatechange' ,function(){
//                 if( myHttp.readyState == 4){
//                     console.log(JSON.parse(myHttp.response).articles);
//                     callBack()
//                     console.log('Health');
//                 }
//             })
//         })
// }


// function done(){
//     console.log('Done');
// }


// (async function(){
//     await getHealth();
//     await getSports()
//     await getBusiness()
//     done()
// })()

// Axios

// async function getApi (){
//     let res =await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4533b57921c3449fa65829b267c4e5d0`,{
//         method: `GET`
//     })
//     let finalRes =await res.json()
//     console.log(finalRes.articles);
// }
// getApi ()


test()