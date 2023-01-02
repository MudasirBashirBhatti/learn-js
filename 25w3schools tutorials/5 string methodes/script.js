
//These are the string methods
/*
1. length   2. toLowerCase()    3. toUpperCase()
4. includes()   5. startsWith()     6. endsWith()
7. search()     8. match        9. indexOf()    
10. lastIndexOf()   11. replace()   12. trim()
13. charAt()      14. charCodeAt      15. fromCharCode()
16. concat()    17. split()     18. repeat()
19. slice()     20. substr()    21. substring()
22. toString()      23. valueOf()

*/










//string length
var Alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var text = Alpha.length;
document.write(text,"<br><br>")








//this is used to convert string into lower case
var A = "Lowercase"
var B = A.toLowerCase();
document.write(B,"<br><br>")








// this method is used to convert string into uppercase
var A = "uppercase"
var B = A.toUpperCase();
document.write(B,"<br><br>");







// .incluemethod is work like a search if it find the searched text in string it will give true otherwise false.
var a = "Hello world"
var b = a.includes("Hello");
document.write(b, "<br><br>")





//startsWith method is work same like incluedes but it try to match the first word.This is case sensitive
var a = "What are you doing"
var b = a.startsWith("What")
document.write(b,"<br><br>");











//endssWith method is work same like incluedes but it try to match the last word.This is case sensitive
var a = "What are you doing"
var b = a.startsWith("word")
document.write(b,"<br><br>");








//search is used to provide us the exect index number of the searched character.it will give us the index 8. Search will find the text only one time.
var a = "What is your name"
var b = a.search("your");
document.write(b,"<br><br>")







//match work same like search but it will give us the string if that text is used many time.
var a = "Hey Mudasir! and Hey Mubashir!"
var b = a.match(/Hey/g);
document.write(b,"<br><br>")











//finding a string in a string. The indexOf() method returns the position of the first occurrence of a specified text
var str = "Please locate where in 'locate' in occurs!";
var pos = str.indexOf("locate")
document.write(pos,"<br><br>");



//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs! ";
var pos = str.lastIndexOf("locate");
document.write(pos,"<br><br>")




//Both indexOf() and lastIndexOf() return -1 if the text is not found.
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("john");
document.write(pos,"<br><br>");







//replace function will replace the word. we used to parameters one is origiana and second is replaced with.
var a = "PHP is a great language That's why I,m using PHP"
var b = a.replace("PHP","JavaScript")
document.write(b,"<br><br>")


//this is also the example of replace but here php replace globelly in all the string whether it is 1 time or 100 times.
var a = "PHP is a great language That's why I,m using PHP"
var b = a.replace(/PHP/g,"JavaScript")
document.write(b,"<br><br>")








//trim is used to remove spaces before writing anything.remove trim and see the difference in it. to see the result use alert insetead of document.write
var a = "            Here we are using the trim function    ";
var b = a.trim();
document.write(b,"<br><br>");










//charAt is used to find the alphabet by using index number.indexing will start from 0
var a = "Mudasir"
var b = a.charAt(3);
document.write(b,"<br><br>");










//charCodeAt is used to provide us the sky code or charcter code of any alphabet or number or any special character and 
var a = "hello world"
var b = a.charCodeAt(1)
document.write(b,"<b> this is the charcter code of 'e' which is at index 1 ","<br><br></b>")









//fromCharCode is is used to find the character with when we put number of this character.We do not required the string in this.
var a = String.fromCharCode(200);
document.write(a,"<b>this is the character at 200 sky code</b><br><br>");








//concat function is used to combine to strings into one string.
var a = "Hello"
var b = " Mudasir"
var x = " !"
var c = a.concat(b)
var d = c.concat(x)
document.write(d,"<br><br>");













//split function is used to break a string into word and write each word in array

var a = "Once there was a crow"
var c = "Once Upon a time"
var d = a.split(" ")
var b = c.split("o");
document.write(d,"<br>")
document.write(b,"<br><br>")








//repeat function is used to repeat the string x times which is parameter we use.
var a = "Hello"
var b = a.repeat(3);
document.write(b, "<br><br>");












//slice function is used to get any word from the string and place it to another place.from - to 
var a = "hello world"
var b = a.slice(1,4)
document.write(b,"<br><br>");








//it works same like slice but it will provide us the numbers from 1 index to 4 index.
var a = "hello world"
var b = a.substr(1,4)
document.write(b,"<br><br>");






//it will not count the last index number and select from start index to 1 less than last index

var a = "Whats are you doing"
var b = a.substring(1,4)
document.write(b,"<br><br>");










//toString is used to convert number to a string
var a = 12
var b = a.toString()
document.write(b," <b>here the type is string because of to string function</b>","<br><br>")









//valueOf function is used to print the same string
var a = "Here we are using valueOf()"
var b = a.valueOf()
document.write(b);


