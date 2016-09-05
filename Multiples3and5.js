

// Multiples of 3 and 5

var arr = [];
function Array(){
 for(var i = 0; i < 1000; i++){
  arr.push(i);
 }
return arr;
}

Array();

var arrMultiples = [];

arr.map(function(num){
  if(num % 3 === 0){
   arrMultiples.push(num);
  } else if (num % 5 === 0){
   arrMultiples.push(num);
  }
 return arrMultiples; 
 }
);

function Counter(){
	this.sum = 0;
}

Counter.prototype.add = function(array) {
	array.forEach(function(item){
		this.sum += item;
	}, this);
};

var sumOfMultiples = new Counter();

sumOfMultiples.add(arrMultiples);
//console.log(sumOfMultiples.sum);


//console.log('Los multiplos de 3 & 5 en un arry de 100 son ' + arrMultiples);

console.log('The sum of multiples is :' + sumOfMultiples.sum);







