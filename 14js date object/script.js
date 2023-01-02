

//example 1         (print simple date)
var x = new Date()  
document.write(x);      //this will print current date and time
document.write("<br><br><hr>")
//expected result:  Fri Jul 09 2021 07:19:35 GMT-0700 (Pacific Daylight Time)



//example 2        (date object with its parameters)

var x = new Date (2018 , 11 , 13 , 10 , 33 , 56 , 7);
document.write(x);
document.write("<br><br><hr>")    // this will print that date in same format as above example formate
//expected result: Thu Dec 13 2018 10:33:56 GMT-0800 (Pacific Standard Time)





//example 3        (We can also pass parametes in form of string)
var x = new Date ("October 13, 2018 11:12:33")
document.write(x);
document.write("<br><br><hr>")

//expected result: Sat Oct 13 2018 11:12:33 GMT-0700 (Pacific Daylight Time) 




//example 4
//as we know the array index is start from 0 and day is also start from 0 so we fetch array with day get the today. We can also perform this task with switch case.
var x = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let y = new Date().getDay()
document.write(x[y]);
document.write("<br><br><hr>")

//expected result : Will show current day







//example 5

//first we create a function the purpose is that if the i is less than 10 than create it 0 + i;
function currentTime(i){
    if(i<10){
        i = "0"+i
    }
    return i;
}


setInterval(time , 1)    
function time(){            //here we create a time function to use it in setinterval
    var x = new Date();
    var cHour = currentTime( x.getHours() );        //we pass every arguement in currentTime() to check the condition.
    var cMinute =currentTime( x.getMinutes() );
    var cSeconds =currentTime( x.getSeconds() );
    var cM = currentTime(x.getMilliseconds())
    var allInOne = cHour + " : " + cMinute + " : " + cSeconds + " : " + cM;

    document.getElementById("timeIs").innerHTML = allInOne  
}







//example 6     (get Month)
var x = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var printDate = new Date();
var newVar = printDate.getMonth();
document.write(x[newVar]);


