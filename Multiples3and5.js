// Multiples of 3 and 5 and their sum

var arr = [];
function array(){
 for(var i = 0; i < 1000; i++){
  arr.push(i);
 }
return arr;
}

array();

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

console.log('The sum of multiples is :' + sumOfMultiples.su

sumOfMultiples.add(arrMultiples);








