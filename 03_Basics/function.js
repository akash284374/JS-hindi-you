function saMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//syMyName()

// function addTwoNuumbers(number1,number2){
//     console.log(number1+number2);
// }


// function addTwoNuumbers(number1,number2){
//     let result=number1+number2
//     return result;
// }


// // addTwoNuumbers(3,4)
// const result=addTwoNuumbers(3,4)
// console.log("Result: ",result);


// function loginUserMessage(username="sam"){
    function loginUserMessage(username){

    // if(username===undefined){
        if(!username){
        console.log("Please enter the user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("akash"));
console.log(loginUserMessage());

