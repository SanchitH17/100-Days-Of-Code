// QUes - Given an Array make a new array such that all its elements are thrice.


const nums  = [10 , 20 , 30 , 40 , 50 ];

const multiplybythreearr = nums.map((value , index , arr)=>{
    return value*3;
})

console.log(multiplybythreearr)