var list = [
	"sun", 	//0 = -7
	"mon",	//1	= -6
	"tue",	//2	= -5
	"wed",	//3	= -4
	"thu",	//4	= -3
	"fri",	//5	= -2
	"sat"	//6 = -1
];

console.log(list);
//var chunk = list.splice(1,4);
var chunk = list.splice(-4,3);

console.log(list, chunk);