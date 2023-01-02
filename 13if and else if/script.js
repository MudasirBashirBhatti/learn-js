//example 1
//simple if and else condition


function simpleAge(){

    //in age variable parseInt weill convert number to integer , .value will get the value and add it to variable
    let age;
    age = parseInt( document.getElementById("age").value);                      
    
    //in this line first we get the value of user and then convert it to uppercase to check the condition
    let hasVoterCard = document.getElementById("voterCard").value.toUpperCase()

if (age >= 18 && hasVoterCard =="YES"){
    
    alert("You can vote!");

}else if(age >= 18 && hasVoterCard != "YES"){

    alert("Get you voter id card!");

}else{

        alert("You can not vote!")
}

}












//example 2
//nested else if 

function secondMethod(){

let age2 = 18;
let hasCard = "yes";

if (age2 >=18){
    if(hasCard == "yes"){
        alert("You can vote")
    }else{
        alert("Get your voter card!")
    }
}else{
    alert("you can not vote!")
}

}





//example 4

function resultFunc(){
var x = 10;
var y = 20;
var msg;
if(x + y > 10){
    msg = "you have passed";
    msg += "congratulation";
}else{
    msg = "Sorry!"
}
var el = document.getElementById('result');
el.textContent = msg;
}