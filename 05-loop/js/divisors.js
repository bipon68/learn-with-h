var n = 144;
var range = Math.ceil(Math.sqrt(n));
//console.log(range);

var divisors = "";

for(var i =1; i<=range; i++){
	if(n%i == 0){
		console.log(n/i);
		if(i==n/i){
			divisors += i + " ";
		}
		else{
			divisors += i + " " + (n/i) + " ";
		}
		
	}
}
console.log(divisors);

