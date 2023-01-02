function myFunctions(){
    var x = "Hello"
    var y = " world"
    var z = x + y;
    document.write(z)
}
document.getElementById("first").innerHTML = myFunctions();



function helloFunction(){
    return "Hello" + " John"
}

document.getElementById("secondf").innerHTML = helloFunction();



function newF(a,b){
    return a + b    
}
document.getElementById("same").innerHTML = newF("Hello","John")

function lastFunction(){
    var x = "What are you doing";
    document.write(x)
}
document.getElementById("demo").innerHTML = lastFunction();