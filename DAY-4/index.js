const body = document.getElementById("he");

body.style.textAlign='center';
let arr = ["blue","green","yellow","pink","white"];
let index = 0 ;
function colorchange(){
 body.style.backgroundColor=arr[index];
 index= ( index +1) %  arr.length;
}
setInterval(colorchange , 1000);

