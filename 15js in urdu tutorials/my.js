// example 1

function print_date() {
    document.getElementById("change_date").innerHTML = Date();
};






//example 2
function myFunction() {

    var x =
    document.getElementById("myTextarea").value;

    document.getElementById("demo").innerHTML = x;

    document.getElementById("numbers").innerHTML = x.length;
    
}







//example 3

function myFunc() {
    var str = 
    document.getElementById("cin").value
    document.getElementById("cpos").innerHTML = str.charAt(document.getElementById("number").value)
    
}




//example 4

document.write(Math.min(2, 4, 5) + " Math Min" + "<br>")

document.write(Math.max(2, 4, 5) +" Math Max" + "<br><br><hr>")









//example 5


document.write(Math.round(4.4)+ " Math roundoff" + "<br>");
document.write(Math.round(4.5) + " <br> <br><hr>")

//others math objects

// cos(x)   //to find cos
// tan(x)   //to find tan
// sin(x)   // to find sin
// log(x)   //to find logarithm
// sqrt(x)  //to find square root
// pow(x,y) // to find power of x








//example 6
// var y = confirm("Press a button");
// if(y == true){
//     document.write("You Pressed Ok!" , "<br><br><hr>")
// }
// else{
//     document.write("You Pressed Cancel!" , "<br><br><hr>");
// }




// example 7 (loops)

// for loop
for(x=1; x<10; x++){
    document.write(x);
}document.write("<br>")


//while loop
var z = 1
while (z<10) {
    document.write(z);
    z++;
    
}
document.write("<br>")
//do while loop   if condition will false than it must run for one time.
var x =10;
do{
    document.write(x);
    x++;
}while (x<10)

document.write("<hr>")

















//example 8
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday"
        break;

        case 1:
            day = "Monday"
            break;

            case 2:
                day = "Tuesday"
                break;

                case 3:
                    day = "Wedneseday"
                    break;

                    case 4:
                        day = "Thursday"
                        break;

                        case 5:
                            day = "Friday"
                            break;

                            case 6:
                                day = "Saturday"
                                break;

}

document.write("<br>" ,"Today is " + day , "<br><br><hr>")













//example 9            (Return)

function myfunction() {
    return "getting return";
}
document.write("<br>",myfunction(),"<br><br> <hr>");










//example 10              (break and continue)
//simeple function
for (let y = 0; y < 10; y++) {
    document.write("<br>",y + ".number line");
    
}document.write("<br> <br>")


//use of break
for (let y = 1; y < 8; y++) {
    if (y==3) {break;}
    document.write(y + ".number line <br>");
}document.write("<br><br>")



//use of continue
for (let y = 0; y<8; y++) {
    if (y==3) {continue;}
    document.write(y + " .number line<br>")
    
}document.write("<br><br><hr>")












//example 11        (Constructor property is use to find the construction function of any data type. For example which function should used for creating the particular function)
document.write("<br>","John" .constructor, "<br>")
document.write(12 .constructor, "<br>")
document.write(true .constructor , "<br>")
document.write([1 , "number"] .constructor, "<br>")
document.write({name:"john" , age:"10"} .constructor, "<br>")
document.write(new Date() .constructor, "<br>")
document.write(function(){} .constructor ,"<br><br><hr>")











//example 12            (Converting numbers to strings)
var xs = 123;
document.write("<br>", String(xs),"<br><br><hr>")







//example 13          (Date Functions)

//This will print the date time
var date = new Date();
document.write(date , "<br><br>")

// 1- year 2- month 3- date 4-  hour 5- minutes 6- secondes 7- milliseconds
var year = new Date(1991 , 2 , 07, 01, 30, 30, 0)
document.write(year , "<br><br>");

// This is same as above and give correct day
var correct_date = new Date(1994,3,08);
document.write(correct_date , "<br><br>");

// this will print the day of year 1969 since calender starts from here
var milli_seconds = new Date(8640000);
document.write(milli_seconds , "<br><br>");

// This will print the correct date
d = new Date();
d = d.toString();
document.write(d , "<br><br>");

//This will print only date
d= new Date();
d = d.toDateString();
document.write(d , "<br><br>");

//This will print only UTC date
d = new Date();
d = d.toUTCString();
document.write(d , "<br><br>");

// This will print only the date
d = new Date();
d = d.toLocaleTimeString();
document.write(d , "<br><br><hr>");










//example 14 (Date function only)

//This function will only print date
var date = new Date();
date = date.getDate();
document.write("Date is : " + date, "<br>");

// This will print only month
var date = new Date();
date = date.getMonth();
document.write("month is : " +date, "<br><br>");

//This will print only day number starts from 0
var date = new Date();
date = date.getDay();
document.write("Day is : " + date + "<br><br>");

// This will print the current year
var date = new Date();
date = date.getFullYear();
document.write("Year is : " + date + "<br><br>");

// This will print the current hour 12 is written as 0
var date = new Date();
date = date.getHours();
document.write("Hour is : " + date + "<br><br>");

// This will print the minutes only
var date = new Date();
date = date.getMinutes();
document.write("Minutes are : " + date + "<br><br>");

// This will print the seconds only
var date = new Date();
date = date.getSeconds();
document.write("seconds are : " + date + "<br><br><hr>");












//example 15
// creating hours of clock
var time = new Date();
var hour = time.getHours();

if (hour < 12){
        sort = "AM";
    }
    else(sort = "PM")

if (hour>12) {
    hour = hour-12;
}

    document.write( hour + " " + sort ,"<br><br><hr>");



//creating minutes of clock
var time = new Date();
var minute = time.getMinutes();

if(minute < 10){
    minute = "0"+ minute;
}

document.write("Minutes : " + minute,"<br><br><hr>")


//creating seconds of a clock
  

var time = new Date();
var sec = time.getSeconds();
if(sec < 10){

    sec = "0" + sec;
}
document.write("Seconds are :" + sec + "<br><br><hr>")










//example 16        (BOM )


// window.open()       //This is used to open the new window

//window.close()          //This is used to close the window

// window.moveTo()
// window.resizeTo()
// window.innerHeight()
//window.innerWidth()
//document.body.client.Width
//screen.width
//screen.height
//screen.availWidth
//screen.colorDepth
//screen.pixelDepth
//window.location.href;
//window.location.hostname
//window.location.pathname
//window.location.protocol

document.getElementById("demo").innerHTML = "Screen Width: " + window.moveTo();