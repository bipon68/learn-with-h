

/*var n = 13;
var result;
var remainder = n % 2;

if(0 == n){
    console.log("this number is newtral ");
}
else if(0 == remainder){
     console.log("this number is even ");
}else{
    console.log("this number is odd ");
}

//console.log (result);

*/

var movieRating = "pg";
var age = 11;

/*
if("pg" == movieRating && age>= 13){
    console.log("You can watch the movie");
}else if("r" == movieRating && age>=18){
    console.log("You can watch the movie");
}else if("g" == movieRating){
    console.log("You can watch the movie");
}else{
    console.log("You can not watch the movie");
} */

if(("pg" == movieRating && age>= 13) || ("r" == movieRating && age>=18) || ("g" == movieRating)){
    console.log("You can watch the movie");
}else{
     console.log("You can not watch the movie");
}
