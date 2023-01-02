
    


// var myVar = setInterval(function(){myTime()},1000);   //without understanding
setInterval(myTime,1000)                                //with understanding



function myTime(){
    var d = new Date();
    document.getElementById("clocks").innerHTML = d.toLocaleTimeString();
}
