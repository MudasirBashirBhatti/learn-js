//              The Number Methods
/*

1. isFinite()   2.isInteger()   3.  isNan   4.isSafteInteger()  5. toExponential(x)     6. toFixed(x)   7.  toPrecision(x)      8.  toString()  9. valueOf()    10. isFinite    11. isInteger

*/


//               Number Properties
/*

1. MAX_VALUE    2. MIN_VALUE    3.NEGATIV_INTEGER   4. POSITIVE_INFINITY    5. NaN  6. Constructor  7. prototype

*/





// example 1 (toString())
//convert number to string
var x = 12
var y = "hello"
document.write( x.toString(),"<br>");
document.write((123).toString(),"<br>");
document.write((100 +123).toString(),"<br><br><hr>");









//exmaple 2     (toExponential() Method)
//the parameter is optional and used to convert number into exponential
var x = 9.656;
document.write(x.toExponential(2),"<b>This will give us the two digits due to exponent 2</b>","<br>");
document.write(x.toExponential(4),"<br><br><hr>");








//example 3     toFixed() Method

//this method returns a string, with the numer writte with a specified number of decimals. This will roundof to particular digits.
var x = 8.392;
document.write(x.toFixed(0),"<br>")
document.write(x.toFixed(10),"<br>")
document.write(x.toFixed(4),"<br><br><hr>")









//example 4     toPrecision()

//toPrecision returns astring, with a number written with a specified length.
var x = 2.343
document.write(x.toPrecision(),"<br>")
document.write(x.toPrecision(2),"<br>")
document.write(x.toPrecision(4),"<br><br><hr>")





//example 5     valueOf()

//valueOf() returns a number as a number.
var x = 124;
document.write(x.valueOf(),"<br>")
document.write((10 + 3).valueOf(),"<br><br><hr>");









//example 4     converting variables to numbers

//                  Number()
var x = "10"
var y = Number(x)
document.write(y,"<br>")
document.write(typeof y,"<br><br>");

var x = true
document.write(Number(x),"<br><br>")







//isFinite will check only if the number is finite or not.if finite it will provide us true else false
var x = 100;
var y = Number.isFinite(x);
document.write(y,"<br><br>");




//isInteger will check if the provided value is integer or not

var x = 200;
var y = Number.isInteger(x)
document.write(y,"<b> this is the isInteger() result</b>","<br><br>")






//parseInt phrases a string and returns a whole number. Spaces are allowed. Only the first number is returned.if we add a decimal value it will give the value without dicimal.

var x = "30 20"
document.write(parseInt(x),"<br><br>")





//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned.it works same like parseInt but it will give us the value after decimal point.
var x = "39"
document.write(parseFloat(x),"<br><br><hr>")








//example 5      Number Properties

//MAX_Value returns the largest number possible in js
var x = document.write(Number.MAX_VALUE,"<b>This is the max value in js</b><br>")


// MIN_Value returns the smallest number possible in js 
var y = document.write(Number.MIN_VALUE,"<b>This is the smallest value in js</b><br>")



//NEGATIVE_INFINITY represents negative infinity (retunrd to overflow)
var z = document.write(Number.NEGATIVE_INFINITY,"<b>this is the negative infinity number</b><br>")




//POSITIVE_INFINITY represents infinity (retuned on overflow)
var z = document.write(Number.POSITIVE_INFINITY,"<b>this is the positive infinity number</b><br><hr>")