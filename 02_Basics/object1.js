// singleton -->constructor

// object literals

const mySym=Symbol("key1")


const jsUser={
    name:"Akash",
    "full name":"akash sah",
    age:18,
    // mySym:"myKey1", // used as string not as symbol
   [ mySym]:"myKey1", // used as symbol

    location:"jaipur",
    email:"akash@google.com",
    isLogedIIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser."full name"); ---->wrong

// console.log(jsUser["full name"]);
// console.log(jsUser.mySym);  //string wala ke liye
// console.log(jsUser[mySym]);  //object ke liye
// console.log(typeof mySym);


jsUser.email="raj@google.com"
// Object.freeze(jsUser)
jsUser.email="rani@google.com"
// console.log(jsUser["email"]);


jsUser.greeting=function(){
    console.log("Hello JS user")
}
jsUser.greeting2=function(){
    console.log(`Hello JS user,${this.name}`)
}
console.log(jsUser.greeting2());




