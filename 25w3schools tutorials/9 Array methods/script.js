

//example 1
// toString() method is used to convert an array into a string
var x = ["Airplane","Car","Bus"]
var y = x.toString()
document.write(y,"<br><br>");



//example 2
//join() method is also joins all array into a string.It behaves just like toString(),but in addition you can specify the separator:
var fruits = ["Banana","Orange","Apple","Mango"];
 var y = fruits.join("*")
document.write(y,"<br><br>");






//example 3
//The pop() method removes the last element from an array:
var x = ["Metal","Plastic","Silver"]
x.pop();
document.write(x,"<br><br>");





//example 4
// The pop() method returns the value that was "popped out"
var x = ["A","B","C","D"]
var y = x.pop();
document.write(y," <b>(pop also show the value that removes)</b>","<br><br>");





//example 5;
//The push() method adds a new element to an array (at the end):
var x = ["Australia", "Asia","Europe"];
x.push("America");
document.write(x,"<br><br>");





//example 6 
// The push()method returns the new array length;
var fruits = ["Banana","Orange","Apple","Mango"]
var x = fruits.push("Kiwi");
document.write(x,"<br><br>");





//example 7 
//The shift() method removes the frist array element and "shifts" all other elements to a lower index.
var fruits = ["Banana","Orange","Apple","Mango"]
fruits.shift();
document.write(fruits,"<br><br>");




//example 8 
//The unshift() method adds a new element to an array (at the beginning), and unshifts older elements:
var fruits = ["Banana","Orange","Apple"]
fruits.unshift("Cherry")
document.write(fruits,"<br><br>");





//example 9
//array elements are accessed using their idex number
var vehicles = ["Airplane","Cars"]
vehicles[0] = "Motorbike"
document.write(vehicles,"<b> (we change the airplane to Motorbike by indexing)</b>","<br><br>")






// example 10
//The splice() method can be used to add anew items to an array:The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.
var fruits = ["Banana","Orange","Apple","Mango"]
fruits.splice(2,0,"Lemon","Kiwi");
document.write(fruits,"<br><br>")





//example 11
//the splice is also used to remove the element from array
var fruits = ["Banana","Orange","Apple"]
fruits.splice(0,1);
document.write(fruits,"<br><br>")







//example 12
//The concat() method creates a new array by merging (concatenating) existing arrays:
var myGirls = ["Cecilie","Lone"]
var myBoys = ["Emil","Tobias","Linus"]
var myChildren = myGirls.concat(myBoys);
document.write(myChildren,"<br><br>")






//example 13
// Merging an array with values
var arr1 = ["Cecilie", "Lone"];
var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]);  
document.write(myChildren,"<br><br>");







var fruits = ["Banana","Orange","Apple","Kiwi"]
fruits.splice(1,2)

















