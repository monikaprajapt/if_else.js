var a=require("readline-sync")
var atm=a.question("enter the atm")
var card=a.question("enter the card")
if (card =="dabitcard"||"cridtcard"){
    console.log("card is right")
    var pin_no=a.questionInt("enter the pin_no")
    if (pin_no=="4number"||"6number"){
        console.log("currect")
        var language=a.question("enter the language")
        if (language=="english"||"hindi"){
            console.log("right")
            var transction=a.question("enter the transction")
            if (transction=="casewithdrowal"){
                console.log("in procing")
                var amount=a.question("enter the amount")
                if (amount>=5000 && amount<=10000){
                    console.log("carrut your amount aap rupye nikal sakte ho")
                }else{
                    console.log("not")
                }
            }else{
                console.log("not")
            }
        }else{
            console.log("not")
        }
    }else{
        console.log("not")
    }
}else{
    console.log("not")
}