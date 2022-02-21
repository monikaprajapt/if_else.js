var a = require("readline-sync")
var b1=a.questionInt("enter the b1 number")
var b2=a.questionInt("enter the b2st number")
var b3=a.questionInt("enter the b3rd nubmber ")
if (b1>b2){
    if (b1>b3){
        console.log("b1 it is largest number")
    }
    else{
        console.log("b3 it is largest number")
    }
}
else if(b2>b3){
    console.log("b2 it is largest number")
}
else{
    console.log("n3 it is largest number")
}


const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;
console.log(result+name+name1)





const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5
console.log(number2*number1*number3)

const value1 = 900719925124740998n;
console.log(value1)


var a="5"+null
console.log(a)
console.log(typeof a)



console.log("2"+2+4)