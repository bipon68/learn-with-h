var list = [
	"sun", 	//0 = -7
	"mon",	//1	= -6
	"tue",	//2	= -5
	"wed",	//3	= -4
	"thu",	//4	= -3
	"fri",	//5	= -2
	"sat"	//6 = -1
];

// var list2 = list.slice();
var list2 = [...list];
list2[1] = "No day";
console.log(list, list2);