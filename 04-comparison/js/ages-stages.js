

var yourAge = -200;
var result;

if(yourAge < 0 || yourAge >= 200){
    result = "vampire";
}
else if(yourAge <=1){
    result = "baby";
}else if(yourAge <=3){
      result = "toddlar";
}else if(yourAge <=12){
    result = "kid";
}else if(yourAge <18){
    result = "teenager";
}else if(yourAge >=18){
    result = "Adult";
}else{
    result;
}

console.log("You are a " + result);