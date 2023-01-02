

var x = 1
var y = 2
var z = x + y;
document.write(z,"<br><br>");






var x = 3e3;
var y = 2e3;
var z = x + y;
document.write(z,"<br><br>");




var x = 4;
var y = 3
var z = "23"
var u = x + y + z;
document.write (u,"<br><br>")



//JavaScript will try to convert strings to numbers in all numeric operations:
var x = "100"
var y = "10"
var z = x / y;
document.write(z,"<br><br>")






var x  = 100 / "Apple";
document.write(x, "<b> This is because we used arithimatic with string for calculation </b>" ,"<br><br>")






 // returns true because x is Not a Number 
var x = 100 / "Apple";
document.write(isNaN(x),"<br><br>")



//type of NaN is number
var x = NaN;
document.write(typeof x,"<br><br>")






// var myNumber = 2;
// var txt = " ";
// while (myNumber != infinity) {
//     myNumber = myNumber * myNumber;
//     txt = txt + myNumber +"<br><br>";
// }document.write(txt)




//JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
var x = 0xFF;
document.write("0xFF = " + x);






var x = 123;
var y = new Number(123);

// typeof x returns number
// typeof y returns object 









var x = new Number(500);             
var y = new Number(500);

// (x == y) is false because objects cannot be compared 