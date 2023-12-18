const arr = [10,20,30,40,50,60,70,80,90,100];

const filteredNumbers = arr.filter((elem,index)=>{
    return elem > 50 ;
})
const squared = filteredNumbers.map((elem,index , array)=>{
          return elem**2;
})

const resultsum = squared.reduce((sum,num) =>{
    return sum+num
},0)

console.log(resultsum);