// What is Shadowing - It is a concept when inner variables shadows the variable which is globally scoped.  
// It happens when a variable declaered in Inner scope is same as variable in outer scope

var a = 10;


function abc(){
     var a = 31 ;
     console.log(a)
}
abc();
console.log(a);