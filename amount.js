var a=require("readline-sync")
var amount=a.questionInt("enter the amount")
if  (amount >=2000){
    note2000=Math.floor(amount/2000)
    amount=amount-note2000*2000
    console.log("2000 /t=/t",note2000)
}
else{
    console.log("any")
}
if  (amount >=1000){
    note1000=Math.floor(amount/1000)
    amount=amount-note1000*1000
    console.log("1000 /t=/t",note1000)
}
else{
    console.log("any")
}