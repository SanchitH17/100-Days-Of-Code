//Ques- Given a Array Nums filter the number greater than 50


const nums = [50,250,20,220,90,10];

const filteredArray = nums.filter((value , index , arr)=>{
    return value>50;
})

console.log(filteredArray);
