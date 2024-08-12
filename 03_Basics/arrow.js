// const user={
//     username:"hitesh",
//     price:999,

//     welcomemessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomemessage()
// user.username="akash"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username="hitesh"
//     console.log(this.username); //undefined
// }
// chai()


//  const chai=function chai(){
//     let username="hitesh"
//     console.log(this.username); //undefined
// }
// chai()

// const chai=()=>{
//     let username="hitesh"
//     // console.log(this.username);  //undefined
//     console.log(this);  //{}

// }
// chai()



// const addTwo=(num1,num2) => {
//  return num1+num2
// }
 
// const addTwo=(num1,num2) => num1+num2
const addTwo=(num1,num2) => ({username:"hitesh"})

console.log(addTwo(3,4));
