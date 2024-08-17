//for each
// const coding=["js","ruby","py","java","python"]  //main
// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
    
// })

// function printMe(item){
//    console.log(item);
// }

// coding.forEach(printMe);


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding=[
   {
    languageName:"javascript",
    languageFileName:"ja"
   },
   {
    languageName:"python",
    languageFileName:"py"
   },
   {
    languageName:"cpp",
    languageFileName:"c++"
   }
]

myCoding.forEach((item)=>{
   console.log(item.languageName);
   
})