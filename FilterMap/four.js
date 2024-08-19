const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currVal){
//     console.log(`acc:${acc} and currVal:${currVal}`);
    
//     return acc+currVal
// },3)
// console.log(myTotal);

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart=[


{
    itemName: "js course",
    price:2999
},
{
    itemName: "py course",
    price:999
},
{
    itemName:"java course",
    price:299
},
{
    itemName:"cpp course",
    price:7999
},
{
    itemName:"html course",
    price:99
},
{
    itemName:"full stack course",
    price:3999
}
]

const price=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(price);

