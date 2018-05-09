var list = [
	1, 11, 2, 3, 34, 18, 23, 45, 41, 9, 82  
];

list.sort();
 
console.log(list); 

var a = 1, b = 3;

// swap way 1
// var c = a;
// 	a = b;
// 	b = c;

//[a,b] = [b,a]
//console.log(a,b); 


var length = list.length-1;
for(var i=0; i<length; i++){
	for(var j=0; j<length; j++){
		if(list[j]> list[j+1]){
			[ list[j], list[j+1] ] = [ list[j+1], list[j] ];
		}
	}
}

console.log(list);