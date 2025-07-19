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




