
// var myVar = setInterval(function(){myTime()},1000);

setInterval(myTime,1000)

function myTime(){

var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();


if(hour < 12){
    sort ="AM"
}else{sort ="PM"};

if (hour > 12){
    hour = hour - 12
}

if (min < 10){
    min = "0" + min
}

if (sec < 10){
    sec = "0" + sec
}

let allInOne = hour + ":" + min + ":" + sec + sort
document.getElementById("clocks").innerHTML = allInOne

}











// var myVar = setInterval(function(){myTime()},1000);

// function myTime(){

// var time = new Date();
// var hour = time.getHours();
// var min = time.getMinutes();
// var sec = time.getSeconds();



// if(hour < 12){
//     sort ="AM"
// }else{sort ="PM"};

// if (hour > 12){
//     hour = hour - 12
// }

// if (min < 10){
//     min = "0" + min
// }

// if (sec < 10){
//     sec = "0" + sec
// }

// document.write(hour + ":" + min + ":" + sec + sort + " " + "</b><br>");

// }