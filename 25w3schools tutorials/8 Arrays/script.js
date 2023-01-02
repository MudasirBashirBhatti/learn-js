//example 1

//simple example of array
var x = ["airplane" , "car" , "Bike"]
document.write(x,"<br><br>");


//example 2 
//Using the js keyword new. This method is not preffered
var x = new Array("Saab", "Volvo","BMW");
document.write(x,"<br><br>");


//example 3
//0 is the first element in an array
var Cars = ["cars","Bus"]
document.write(Cars[1],"<br><br>");



//example 4
// we can use string and numbers in arrays

var Name = ["John", "Doe", 46]
document.write(Name[2],"<br><br>")



//example 5
//The length property returns the number of elements
var cars = ["Suzuki","Mehran","Alto","Cultus"]
var y = cars.length;
document.write(y);




//example 6

//The best way to loop through an array, is using a "for" loop.
var fruits,text,fLen,i;
fruits = ["Banana", "Orange","Apple","Mango"]
fLen = fruits.length;
text = "<ul>"
for ( i = 0; i <  fLen; i++) {
text += "<li>" + fruits[i] + "</li>";
}
document.write(text)






//example 7

//The easiest way to add a new element to an array is using the push method:

var z = ["Banana","Orange","Apple","Mango"];
z.push("Lemon");
document.write(z,"<br><br>")



//example 8
var fruits = ["B","G","A","C"]
fruits[6]= "Lemon";
document.write(fruits,"<br><br>");







//example 9 
//how to identify that the particular var is an array
var x = ["hello","World"];
document.write(Array.isArray(x),"<b> this is true because the given var is an array</b>","<br><br>");


//example 10 
// this is also we used to identify the array
var fruits = ["Banana","Orange","Apple"]
fruits instanceof Array;
document.write(fruits);

//You should use objects when you want the element names to be strings (text).
//You should use arrays when you want the element names to be numbers.