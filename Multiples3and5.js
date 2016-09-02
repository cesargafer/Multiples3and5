

// Multiples of 3 and 5

var arr = [];
function Array(){
 for(var i = 0; i <= 100; i++){
  arr.push(i);
 }
return arr;
}

console.log(Array());
var arrMultiplos = [];

arr.map(function(num){
  if(num % 3 === 0){
   arrMultiplos.push(num);
  } else if (num % 5 === 0){
   arrMultiplos.push(num);
  }
 return arrMultiplos; 
 }
);


console.log('Los multiplos de 3 & 5 en un arry de 100 son ' + arrMultiplos);





