// s0 = 1 2 3 4 5 6 7 8 9
// s1 = 2 4 6 8 10 12 14 
// s2 = 1 4 7 10 13 16
// s3 = 0 3 8 15 24 35 48
// s4 = 1 4 3 8 5 12 7 16 9 20 ...
// s5 = 0 1 1 2 3 5 8 13 ... fobonacci


//
/*
var i, j;
for(i=0, j=10; i<=10; i++, j-- ){
    console.log(i,j);
}
*/

var i;
var series = "";
var n;
for(i=1; i<=10; i++){
	n = i*2;
  	series = series + n + " ";
}
console.log("series 1 : ", series);

// s2 = 1 4 7 10 13 16
var i;
var series = "1";
var n=1;
for(i=1; i<=10; i++){
	n = n+3;
  	series = series + " " + n + " ";
}
console.log("series 2 : ", series);


// s3 = 0 3 8 15 24 35 48
 var i;
var series = "";
var n;
for(i=1; i<10; i++){
	n = i*i-1;
  	series = series + " " + n + " ";
}
console.log("series 3 : ", series);



// s4 = 1 4 3 8 5 12 7 16 9 20 ...
var i;
var series = "";
var n;
for(i=1; i<10; i++){
	n = i;
	if(n%2 == 0){
		n = n*2;
	}
  	series = series + " " + n + " ";
}
console.log("series 4 : ", series);


// s5 = 0 1 1 2 3 5 8 13 ... fobonacci
var i;
var series = "0 1";
var n = 0;
var x = 0;
var y = 1;
for(i=1; i<10; i++){
	n = x+y;
	x = y;
	y = n;
  	series = series + " " + n + " ";
}
console.log("series 5 : ", series);