//Primitive 
//7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

// const score=100
// const scoreValue=100.3
// const isLoggedIn=false
// const outsideTemp=null
// // let userEmail;  --->this 
// let userEmail=undefined;//-->and this is same


// const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id===anotherId);



//Reference (Non Primitive)
//Array,Objects,Functions


//array
// const heroes=["Shaktiman","naagraj","doga"];

// //obj

// let myObj={
//     name:"akash",
//     age:22
// }

// {
//     name:"akash"
//     age: 22
// }

// const myFunction=function(){
//     console.log("Hello Duniya");
// }
// console.log(typeof myFunction)







// ********************************

//Stack (primitive),Heap (non primitive)
// let myYoutubename="Akashsah"
// let anothername=myYoutubename
// anothername="Aman"
// console.log(myYoutubename);
// console.log(anothername);


let userOne={
    email:"raj@google.com",
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);



