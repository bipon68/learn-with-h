var list1 = [
	"sun", 	//0 = -7
	"mon",	//1	= -6
	"tue",	//2	= -5
	
];

list2 = [
	"wed",	//3	= -4
	"thu",	//4	= -3
	"fri",	//5	= -2
	"sat"	//6 = -1
]
list3 = [
	"no day",	//3	= -4
]

// var list = list1.concat(list2);
//var list = list1.concat(list2,list3);
var list = [].concat(list1,list2,list3);

console.log(list);