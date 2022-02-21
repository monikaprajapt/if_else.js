// var a=require("readline-sync")
// var year=a.question("enter the year")
// if (year%4==0){
//     console.log("leap year")
//     if (year%100==0){
//         console.log("leap year hai")
//         if (year%400==0){
//             console.log("leap year hai")
//         }else{
//             console.log("leap year nhi")
//         }
//     }else{
//         console.log("leap year  hai")
//     }
// }else{
//     console.log("leap year nhi hai")
// }


// var a=require("readline-sync")
// var year=a.question("enter the year")
// if (year%4==0){
//     console.log("leap year")
//     if (year%100==0){
//         console.log("leap year hai")
//         if (year%400==0){
//             console.log("leap year hai")
//         }else{
//             console.log("leap year nhi")
//         }
//     }else{
//         console.log("leap year  hai")
//     }
// }else{
//     console.log("leap year nhi hai")
// }



















let readlineSync = require("readline-sync");
 
var computerMoves = ['rock', 'paper', 'scissors'];
var randomMoveOfComputer = computerMoves[Math.floor(Math.random() * computerMoves.length)];
 
var playerName= readlineSync.question("What is your name: ")
console.log("hi "+ playerName )
console.log("choose any move in rock paper scissors")
var playerMove = readlineSync.question("Which move you want to do? ");
 
if (playerMove == randomMoveOfComputer){
   console.log("Match Draw");
}
else if(playerMove =="rock" && randomMoveOfComputer == "paper"){
   console.log("computer won the match");
}
else if(playerMove=="rock" && randomMoveOfComputer == "scissors"){
   console.log(playerName+" Won the match");
}
else if(playerMove=="scissors" && randomMoveOfComputer == "rock"){
   console.log("computer won the match");
}
else if(playerMove=="scissors" && randomMoveOfComputer == "paper"){
   console.log(playerName+" Won the match");
}
else if(playerMove=="paper" && randomMoveOfComputer == "rock"){
   console.log(playerName+" Won the match");
}
else if(playerMove=="paper" && randomMoveOfComputer == "scissors"){
   console.log("computer won the match");
}


