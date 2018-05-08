var list = [
	"sun", 	//0 = -7
	"mon",	//1	= -6
	"tue",	//2	= -5
	"wed",	//3	= -4
	"thu",	//4	= -3
	"fri",	//5	= -2
	"sat"	//6 = -1
];

//var chunk = list.slice(1,4);
// var length = list.length-3;
// var chunk = list.slice(length);


//var chunk = list.slice(length-3);
var chunk = list.slice(length-5,-3);

console.log(list, chunk);