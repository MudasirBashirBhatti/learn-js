//lecture 1
//how to write object
var car = {                           //first method
    color:"red",
    model:"2016",
    engine:"Brand New"
}

document.write(car.engine)
document.write("<br><hr>")



var person = new Object();             //second method
person.name = "Haadi";
person.lastName = "Jaan";
document.write(person.lastName + "<br><hr>")





//lecture 2
//we can write object in parent object
var person = {
    fname:"Mudasir",
    lname:"Bashir",
    qualification:{
        pg:"New Asia",
        matric:"High School"
    }
}
document.write(person.qualification.matric)
document.write("<hr>")





//lecture 4
// we can create function to call objects

var persons = {
    firsName:"Mudasir",
    lastName:"Bashir",
    fullName: function(){
       return this.firsName +" " + this.lastName;
    }
}
document.write(persons.fullName()+ "<br><hr>")








//lecture 5

var guns = {
    name:"Ak47",
    model:"1947",
}
guns.color="red";       //here we have add another object in guns
delete guns.name;       //here we delete the name from object check it with 'name' in guns and see what happen
document.write('color' in guns);    //here we have checked the added object value
document.write("<br>")
document.write('name' in guns);     //here we have checked the deleted value from the object
document.write("<hr>")










//lecture 6
//for in loop is used in object

var airplane = {
    name:"boing",
    model:"1998"
}
for(var key in airplane){
    document.write(key + "<br>") //this is used to check key
    // document.write(airplane[key]) //this is used to check values in key object
}
document.write("<hr>")









//lecture 7
//constructor in js

function UserName(fn,ln){       //first example
this.firstName = fn;
this.lastName = ln;
}

var obj1 = new UserName("Mudasir" , "Bashir");
console.log(obj1);




function Cars(col, mod){        //second example in which we add a third object
this.Color = col;
this.Model = mod;
}
var obj3 = new Cars("red","1030");
obj3.name ="Suzuki";
console.log(obj3)




function User(fn,ln){       //third example in which we are using a funtion
    this.firstName = fn;
    this.lastName = ln;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}
var obj4 = new User("Mudasir","Bashir")
console.log(obj4);








//lecture 8
//prototype
function User(fn,ln){
    this.firstName = fn;
    this.lastName = ln;
}
User.prototype.age=10;
var object3 = new User("Mudasir","Bashir")
console.log(object3)












//lecture 9
//hoisting (The most confusing and importent consept)

//if we define variable latter and print its value first than we get an error which is undefined
// if we define function as a veriable then must initialize it first and then call a function


//in this case we will get an undefined error
document.write(x,"<br>");
var x = 5;

//in this case we will get 5 output
document.write(x,"<br><hr>");
var x;
x=5;


//in this case we will get an error than function is not defined

// hello();
// var hello = function(){
//     document.write("hello world")
// }










//lecture 10
//Math object
/* 
1.  Math.round(it will round off the digit 10.5 to 11 and 10.4 to 10)
2.  Math.ceil(it will m to m+1 and n to 0, let say 10.5 here m is 10 and n is .5)
3.  Math.floor(it will print m and neglect n)
4.  Math.trunc(it works same like floor print m and neglect n)
5.  Math.pow(it is used for power e.g. Math.pow(2,4) the result will be 16)
6.  Math.sqrt(it is used for square root e.g. Math.sqrt(25) the result will be 5)
7.  Math.abs(it will always give us a positive integer even if it is negative e.g. -2 to 2)
8.  Math. min(it will give us the min number e.g. Math.min(3,4,5) the resutl will be 3)
9.  Math. max(it will give us the max numer e.g. Math. max (3,4,5) the result will be 5)
10. Math. log(it will give us the log of a number)
11. Math.random(it will give us the random number the example is given below)
*/

var x = Math.random()*10;
document.write(Math.trunc(x),"<br><hr>");