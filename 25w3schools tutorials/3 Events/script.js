



function firstFunc(){

    var time = new Date();
    var hint = setInterval(function(){firstFunc()},1000)
    myVar = time . toLocaleTimeString()

    document.getElementById("dateIs").innerHTML = myVar;
}






function displayDate() {
    var x = new Date();
    var y = setInterval(function(){displayDate()},1000)
    d = x .  toLocaleTimeString()
    document.getElementById("theTimeIs").innerHTML = d;
    
}
