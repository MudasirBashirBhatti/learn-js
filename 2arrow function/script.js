// We use arrow function instead of simeple function because arrow function is very small.
//arrow function is completely anonymous.

//<---------------------------------example 1-------------------------------------------->

//this is the simple arrow function
// we can not add any line break b/w round paranthesis and fat arrow in arrow function 
var myVar = () =>{
    document.write("hello world")
}

myVar();
document.write("<br><hr>")









//<---------------------------------example 2-------------------------------------------->
//arrow function with parameter

//if we have only one parameter than we dont need to add parantesis around it like (a).it is optional not compulsory.
var myVar = a =>{
    document.write(a);
}
myVar("Example of second method")
document.write("<br><hr>")







//<---------------------------------example 3-------------------------------------------->


//if we have more than one parameters then paranthesis around the parameters is necessary.
var myVar = (a,b,c)=>{
    document.write(a+b*c);
}
myVar(2,3,5);
document.write("<br><hr>")



//<---------------------------------example 4-------------------------------------------->
//arrow function with default parameters



//we can also add default parameter in arrow function
var myVar = (a , b=30) =>{
    document.write(a + b + " This is the 4th example");
}
myVar(20);              //if we paas two arguments than b will override
document.write("<br><hr>");







//<---------------------------------example 5-------------------------------------------->
//arrow function with rest parameters
var myVar = (a , ...b) =>{
    document.write(a + " " + b + "this is the example of rest parameter")
}
myVar(1 , 2 , 3, 4 ,5)






//<---------------------------------example 6-------------------------------------------->
//some important consepts
//(i)
// curly brackets are optional in case of single statement.
var myVar = () => document.write( "hello world");
myVar();
document.write("<br><hr>")


var myVar = (a) => document.write(a);
myVar("This is 6th statement");
document.write("<br><hr>")



//(ii)
// if we do not use curly braces for multiple statements then our sequence will become change first thing execute last and last at first.




//(iii)
//we do not need to write return in arrow function. This work will done automatically by arrow function.But some important points keep in mind.
// do not write opening and curly braces at second a. with curly braces this code will work
//var myFun = a => {return a;};     //this will work
//var myFun = a => {a};     //this will not work
var myFun = a => a;
document.write(myFun("This is simple return"));














// (a,b)=>a+b;     same as below

// function show(a,b){
//     return a + b;
// }

//same as above