var list = [
	"sun", 	//0 = -7
	"mon",	//1	= -6
	"tue",	//2	= -5
	"wed",	//3	= -4
	"thu",	//4	= -3
	"fri",	//5	= -2
	"sat"	//6 = -1
];
1
// way 1
// for(var i=0; i<list.length; i++){
// 	console.log("Elementat ", i, "offset is", list[i]);
// }

// way 2
// for(var i=list.length-1; i>=0; i--){
// 	console.log("Elementat ", i, "offset is", list[i]);
// }

// way 3

for(i in list){
	console.log("Elementat ", i, "offset is", list[i]);
}