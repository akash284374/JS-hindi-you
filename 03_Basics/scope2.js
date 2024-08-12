// let a=300
// if(true){
//     let a=10
//     const b=20
//     // console.log("Inner ",a);   
// }

// // console.log(a);

// function one(){
//     const username="hitesh"

//     function two(){
//        const website="Youtube"
//        console.log(username);
//     }
// //    console.log(website);
   
//     two()
// }

// one()




// if(true){
//     const username="hitesh"
//     if(username==="hitesh"){
//         const website=" youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
    
// }

// console.log(username);



// ++++++++++++ interesting +++++++++
console.log(addOne(5))  //correct
function addOne(num){
    return num+1;
}

console.log(addOne(5))  //correct

console.log(addTwo(5));  //error
const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))  //correct