var myList = ['bipon', 'arif', 'ashik'];

//myList[3] = 'simon'
myList[myList.length] = 'Mridul';
myList.push("Gomez");
myList.unshift("Simon");

var lastElement = myList.pop();
console.log(myList.length);
//console.log(lastElement);

var firstElement = myList.shift();
console.log(firstElement);
console.log(myList.length);
