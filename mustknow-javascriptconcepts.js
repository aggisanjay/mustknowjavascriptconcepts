// const sentence = "Hello world this is JavaScript";

// // Split into characters, reverse the array, then join back
// const reversed = sentence.split(" ").reverse().join(" ");

// console.log(reversed);
// // Output: "tpircSavaJ si siht dlrow olleH"


// let arr=[,,,];
// console.log(arr.length); //3



// let arr = [,,,];          // Array with 3 empty slots
// let arr2 = [1, 2, 3, 4];  // Array with 4 elements
// let arr3 = [[1,2,3],[4,5,6]]; // Array with 2 elements, each is an array

// console.log(arr.length); // 3
// console.log(arr2.length); // 4
// console.log(arr3.length); // 2


//sort in ascending order

// let arr=[1,18,9,81,98,124,78]
// arr.sort((a,b)=>a-b)
// console.log(arr) //[1, 9, 18, 78, 81, 98, 124]



//map example

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let arr2=arr.map((x)=>x*2)
// console.log(arr2) //[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


// let arr = [1, 18, 9, 81, 98, 124, 78];

// let arr2 = arr.map((x) => x >100 );
// console.log(arr2); // [false, false, false, false, false, true, false]


//empty an array

// let arr=[1,2,3,4,5,6,7,8,9,10]
// arr.length=0
// console.log(arr) //[]

// arr=[]
// console.log(arr) //[]

// arr.splice(0,arr.length)
// console.log(arr)  //[]


//how many ways to create an object

// let obj={a:1,b:2,c:3}
// let obj2=new Object({a:1,b:2,c:3})
// let obj3=new Object()
// obj3.a=1
// obj3.b=2
// obj3.c=3
// console.log(obj) //{a: 1, b: 2, c: 3}
// console.log(obj2) //{a: 1, b: 2, c: 3}
// console.log(obj3) //{a: 1, b: 2, c: 3}



//how many ways to create an array object


// let arr=[1,2,3,4,5,6,7,8,9,10]
// let arr2=new Array(1,2,3,4,5,6,7,8,9,10)
// let arr3=new Array()
// arr3[0]=1
// arr3[1]=2
// arr3[2]=3
// arr3[3]=4
// arr3[4]=5
// arr3[5]=6
// arr3[6]=7
// arr3[7]=8
// arr3[8]=9
// arr3[9]=10
// console.log(arr) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr2) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr3) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




//make unique values using array

// let arr=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
// let arr2=[...new Set(arr)]
// console.log(arr) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr2) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let uniqueArr=arr.filter((item,index)=>arr.indexOf(item)===index);
// console.log(uniqueArr) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




// function abc(a,b,c){

// }
// function pqr(a=0,b,c){

// }
// console.log(abc.length,pqr.length); //3,0



// console.log([]===[])  //false
// console.log([]==[])   //false



//take a string print capial first letter for each word and print each word in new line

// let str="this is sanjay aggi"

// let capitalizedStr=str.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1))
// capitalizedStr.forEach((word)=>console.log(word)) //This Is Sanjay Aggi




// console.log(typeof NaN) //number
// console.log(isNaN(NaN)) //true
// console.log(Number.isNaN(NaN)) //true
// console.log(typeof object) //object


// var a=10;

// console.log(++a) //11
// console.log(a++) //11
// console.log(a) //12


//~ bitwise not or tlide operator

// let a=10;
// let b=~a;
// console.log(b) //-11

//caret operator

// let a=10;
// let b=20;
// let c=a^b;
// console.log(c) //30




//take a sentence and reverse the sentence

// const sentence="He world this is Javascript"
// // const reversed=sentence.split(" ").reverse().join(" ")
// // console.log(reversed) //Javascript is this world He


// const reversed = sentence.split("").reverse().join("");

// console.log(reversed);
// Output: "tpircSavaJ si siht dlrow olleH"




// const arr1 = [100, 200, 300, 400];
// const arr2 = [100, 200, 300, 400];
// console.log(arr1 === arr2); // false



//how to compare array

// function compareArrays(a,b){
//     if(a.length!==b.length) return false;
//     for(let i=0;i<arr1.length;i++){
//         if(a[i]!==b[i]) return false;
//     }
//     return true
// }



// const arr1=[100,200,300,400]
// const arr2=[100,200,300,400]
// console.log(JSON.stringify(arr1)===JSON.stringify(arr2))//true




// let x;
// console.log(x); //undefined


// let y=null;
// console.log(y); //null

//infinite currying

// function sum(a){
//     return function(b){
//         if(b!==undefined){
//             return sum(a+b)
//         }
//         return a;
//     }
// }

// console.log(sum(1)(2)(3)(4)()) //10




//how make array length 100

// const array=new Array(100)
// console.log(array.length) //100


// const array=new Array(100).fill(0)
// console.log(array.length) //100


// typeof null //object
// typeof undefined //undefined
// typeof NaN //number
// typeof Infinity //number
// typeof Symbol //symbol



//object freeze

// const obj={a:1,b:2,c:3}
// Object.freeze(obj)
// obj.a=10
// console.log(obj) //{a: 1, b: 2, c: 3}

//shallow freeze

// const user={name:"sanjay"}
// Object.freeze(user)
// user.name="aggi"
// console.log(user) //{name: 'sanjay'}



//promise chaining

// function task(message, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve();
//     }, delay);
//   });
// }

// task('Task 1 completed', 1000)
//   .then(() => task('Task 2 completed', 2000))
//   .then(() => task('Task 3 completed', 1000))
//   .catch((error) => console.error(error));



//merge alternative strings
// let arr1="sanjay" 
// let arr2="aggi"

// let result='';

// let maxLength=Math.max(arr1.length,arr2.length)
// for(let i=0;i<maxLength;i++){
//    if(i<arr1.length) result+=arr1[i]
//    if(i<arr2.length) result+=arr2[i]

// }

// console.log(result) //saagngjiay




//first repeated character


// const str="sanjay"

// function firstRepeatedCharacter(s){
//     const seen=new Set()
//     for(let char of s ){
//         if(seen.has(char)){
//             return char;
//         }
//         seen.add(char);
//     }
//     return null;
// }
// console.log(firstRepeatedCharacter(str)) //a



// const arr=["a","b",18,"d",100,10]

// const numbers=arr.filter(item=>typeof item==="number")
// console.log(numbers)//[18, 100, 10]
// const characters=arr.filter(item=>typeof item==="string")
// console.log(characters) //["a", "b", "d"]



// console.log(a)
// // var a; // undefined

// const a=5; //reference error


// function abc(){
//     var a=100
// }
// console.log(a) //reference error



// var a;

// function abc(){
//     a=100;
// }
// abc();
// console.log(a); //100


// function abc(){
//     var a=100;
//     return a;
// }
// console.log(abc()) //100


// const c=100

// const obj={name:"Alice"}
// obj.name="Bob"
// console.log(obj); //{name: 'Bob'}


//function declaration

// function abc(){
//     return a+b
// }


// //function expression


// const abc=function(a,b){
//     return a+b;

// }



// if([]){
//     console.log("sanjay is absent"); //sanjay is absent

// }else{
//     console.log("sanjay is present")
// }



// if([]==true){
//     console.log("sanjay is absent"); 

// }else{
//     console.log("sanjay is present") //sanjay is present
// }



// let obj={a:{b:undefined}};
// console.log(obj.a?.b?.c?.d?? 'sanjay') // sanjay



// var abc=25;

// if(function f(){}){
//     abc=abc+typeof f;
// }
// console.log(abc); //25undefined



//async await example

// function fetchData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Data received!");
//         },2000);
//     })
// }

// async function getData(){
//     console.log("Start fetching...");

//     const data=await fetchData();
//     console.log(data);
//     console.log("Fetching complete.")
// }
// getData(); // Start fetching... Data received! Fetching complete



//infinite currying

// function add(a){
//     return function(b){
//         return a+b;
//     };
// }

// console.log(add(2)(3)) //5


// function add(a){
//     let sum=a;
//     function inner(b){
//         if(b===undefined){
//             return sum;
//         }
//         sum+=b;
//         return inner;
//     }
//     return inner;
// }

// console.log(add(1)(2)(3)(4)()) //10


//template literals

// const name="sanjay";
// const age=25;

// const message=`My name is ${name} and I am ${age} years old.`;
// console.log(message) //My name is sanjay and I am 25 years old.


//basic express application

// const express=require('express')
// const app=express();
// const port=3000;

// app.get('/',(req,res)=>{
//     res.send("Hello World!")
// });

// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`)
// })



//code to generate jwt token

// import jwt from "jsonwebtoken";


// const payload={username:"sanjay",role:"admin"};

// const secret="mysecretkey";


// const token=jwt.sign(payload,secret,{expiresIn:"1h"});
// console.log(token)


// //verfiy jwt token

// try{
//     const decoded=jwt.verify(token,secret);
//     console.log(decoded) // {username: 'sanjay', role: 'admin'}
// }catch(error){
//     console.log(error)
// }




// //capturing phase 

// parent.addEventListener('click',()=>console.log('Parent capturing'),{capture:true})

// //Bubbling phase

// child.addEventListener('click',()=>console.log('child capturing'),{capture:true});



//lexical scope

// function outer(){
//     let x=10;
//     function inner(){
//         let y=5;
//         console.log(x+y); //15
//     }
//     inner();
// }
// outer();


//get all vowels

// const sentence="hello world"
// const vowels=sentence.match(/[aeiou]/gi)
// console.log(vowels)  // [ 'e', 'o', 'o' ]



//longest word in a sentence

// let str="i am sanjay";

// const words=str.split(" ");
// let longestWord=words[0];
// for(let i=1;i<words.length;i++){
//     if(words[i].length>longestWord.length){
//         longestWord=words[i];
//     }
// }
// console.log(longestWord) //sanjay



//create json file in javascript


// const obj={
//     name:"sanjay",
//     age:25,
//     address:"xyz"
// }
// const json=JSON.stringify(obj);
// console.log(json) //{"name":"sanjay","age":25,"address":"xyz"}



//json parse

// const json='{"name":"sanjay","age":25,"address":"xyz"}';
// const obj=JSON.parse(json);
// console.log(obj) // {name: 'sanjay', age: 25, address: 'xyz'}



//every method : true or false


// const arr=[1,2,3,4,5];
// const result=arr.every(item=>item>0);
// console.log(result) //true


//which method is retitive  a character from an index


// const str="sanjay";
// const char=str.charAt(2);
// console.log(char) //j




// const name="sanjay aggi";
// console.log(name()) //TypeError



// console.log([]==[]) //false


//console.log(JSON.stringify([]) === JSON.stringify([])); // true



// function xyz(a,b=0,c){

// }

// console.log(xyz.length) //1



// let abc="aggi"
// function fn(){
//     console.log(abc); //ReferenceError
//     let abc="sanjay";
// }
// fn(); 




// abc() // I am last
// var abc=function(){
//     console.log("I am first");
// };
// abc() // I am first
// function abc(){
//     console.log("I am last")
// }
// abc()  // I am first



//first letter capital in each word

// let str="this is my interview"

// const result=str.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
// console.log(result)


//immediately invoked function

// (function(){
//     //private scope
//     var private="This variable is not accesible outside"
//     console.log("IIFE executed!")
// })();

// //with parameters
// (function(name){
//     console.log(`hello,${name}!`);
// })('John')



//argument object

// function sum(){
//     let total=0;
//     for(let i=0;i<arguments.length;i++){
//         total+=arguments[i];
//     }
//     return total;
// }
// sum(1,2,3,4) //10


//variable scope inside loops with clourses

//problem
// for(var i==0;i<3;i++){
//     setTimeout(()=>console.log(i),100)  //logs 3,3,3
// }


//sloution 1:use let instead of var for block scoping

// for(let j=0;j<3;j++){
//     setTimeout(()=>console.log(j),100); //Logs 0,1,2
// }

//solution 2: use an IIFE to create a new scope

// for(var k=0;k<3;k++){
//     (function(index){
//         setTimeout(()=>console.log(index),100); //logs 0,1,2
//     })(k);
// }


//function composition

// const compose=(f,g)=>x=>f(g(x));

// const addOne=x+1
// const double=x*2

// const addOneThenDouble=compose(double,addOne)

// addOneThenDouble(3); //8  (double(addOne(3))=double(4)=8)




//function declartions vs class declartions

//function constructor

// function Person(name){
//     this.name=name;
// }

// Person.prototype.greet=function(){
//     return `Hello, I'm ${this.name}`;
// };


// class declaration

// class Person(){
//     constructor(name){
//         this.name=name;
//     }
//     greet(){
//         return `Hello, I'm ${this.name}`;
//     }
// }





// creating objects 

//object literals

// const person={
//     name:'John',
//     age:30,
//     greet:function(){
//         return `Hello, I'm ${this.name}`;
//     }
// }


//constructor functions

// function person(name){
//     this.name=name;
// }
// const person=new person('John');

//object.create()

// const prototype={
//     greet(){
//         return "Hello"
//     }
// }
// const obj=Object.create(prototype);

//Es6 classes

// class Person{
//     constructor(name){
//         this.name=name;
//     }
// }
// const person=new Person('John')

//Factory functions


// function createPerson(name){
//     return {
//         name
//     }

// }
// const person=createPerson('John');




//prototype chain

// const animal={
//     makeSound:function(){
//         return "Some sound";
//     }
// };

// const dog=Object.create(animal);
// dog.makeSound(); //"Some sound"

//check prototype chain

// Object.getPrototypeOf(dog)===animal; //true



//prototypal inheritance

// const parent={
//     greet(){
//         return 'Hello from parent'

//     }
// };

//child inherits from parent

// const child=Object.create(parent);
// child.name="Child Object";

//child can use parent's methods

// child.greet(); //"Hello from parent"




//object.create() vs constructor pattern

// const personProto={
//     greet(){
//         return `Hello, i'm ${this.name}`;
//     }
// };

// const john=Object.create(personProto);
// john.name="John";


//constructor pattern

// function Person(name){
//     this.name=name;
// }
// Person.prototype.greet=function(){
//     return `Hello, I'm ${this.name}`;
// }

// const jane=new Person("Jane");




//factory functions

// function createPerson(name,age){
//     //private variables
//     const privateData={
//         birthyear:new Date().getFullYear()-age};

//     //public interface

//     return{
//         name,
//         getAge(){
//             return age;
//         },
//         getBirthYear(){
//             return privateData.birthYear;
//         },
//         celebrate(){
//             age++;
//             privateData.birthYear--;
//         }
//     };

// }

// const john=createPerson('John',30);
// john.getAge(); //30
// john.celebrate();
// john.getAge(); //31



//constructor functions

// function Person(name,age){
 //this refers to the new object being created

//     this.name=name;
//     this.age=age;

//     //adding a method directly to the instance

//     this.greet=function(){
//         return `Hello, I'm ${this.name}`;
//     }
// }

 //Adding a method to the prototype (more efficient)

// Person.prototype.getAge=function(){
//     return this.age;
// };

// //creating instances

// const john=new Person('John',30);
// john.greet(); // 'Hello , I,m John'




//new keyword

// function Person(name){
//     this.name=name;
// }
 //This is what happens when you call 'new Person('John')' 

// function createInstance(constructor,...args){
//     //1.create a new object with the constructor's prototype
//     const instance=Object.create(constructor.prototype);
//     //2.call the constructor with 'this' set to the new object
//     const result=constructor.apply(instance,args);
//     //3.return the new object, unless the constructor returned something 
//     else
//         return (typeof result==='object' && result!==null) ?result: instance;


// }

// const john=createInstance(Person,'John')
//Equivalent to: const john=new Person('John);




//getters and setters

// const person={
//     firstName:'John',
//     lastName:'Doe',

   //getter
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     },

//     //setter

//     set fullName(value){
//         const parts=value.split(' ');
//         this.firstName=parts[0];
//         this.lastName=parts[1];
//     }
// };

// console.log(person.fullName); //John Doe



//object.defineProperty()


// Object.defineProperty(personalbar,'age',{
//     get(){
//         return this._age;
//     },
//     set(value){
//         if(value<0){
//             throw new error('Age Cannot be negative');
//         }
//         this._age=value;
//     }
// });



//dot notation and bracket notation


// const person={
//     name:'John',
//     'job title':'Developer',
//     123:'numeric key'
// }

// //Dot notation

// console.log(person.name); //'John'

// //bracket notation

// console.log(person['name']) //'John'

// console.log(person['job title']) //'Developer'

// console.log(person[123]) ; //'numeric key'

// //dynmaic property access

// const key='name'
// console.log(person[key]) // 'John'




//check if a property exists in an object


//using the in operator

// const person={
//     name:'John',
//     age:30
// }
// console.log('name' in person ) // true
// console.log('job' in person) // false

// //using hasOwnProperty() 

// console.log(person.hasOwnProperty('name')) //true
// console.log(person.hasOwnProperty('toString')); //false

// //direct comparsion with undefined

// console.log(person.name!==undefined); //true
// console.log(person.job!==undefined) //false

// //using object.hasOwn() 
// console.log(Object.hasOwn(person,'name')) //true



//property shadowing


// const parent={
//     value:42,
//     getValue(){
//         return this.value;
//     }
// };

// const child=Object.create(parent);
// console.log(child.getValue()); //42

// //shadow the parent's property

// child.value=100;
// console.log(child.getValue()); //100

