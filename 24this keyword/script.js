//for all regular function calls 'this' points to window object.

let person = {
    fname : "Mudasir",
    lname : "Bashir",
    sayHello(){
        document.write("Hello! My Name is " + this.fname + ". And I have a " + car.name + " car whose brand is." + car.brand)
    }


}

let car = {
    name : "Tata",
    brand : "Ferrari"
}

person.sayHello();      //this is not a regular function call.

// we have use this for the property of that objects in which we are prasent.
//we can also write person.fname instead of this.fname but this not make any sense as we are present in the same object.



// <-----------------------------------------example 2-------------------------------------------------------->
//this will print window in console
console.log("example 2" ,this)








// <-----------------------------------------example 3-------------------------------------------------------->
// This is not a good way to use this example.
var myName = "Mudasir";
function myFunc(){
    var game = "Hockey"
    console.log("example 3" ,this)
}
myFunc(); 




// <-----------------------------------------example 4-------------------------------------------------------->
var myName = "Mudasir";
var myInfo = function(){
    var game = "Hockey"
    console.log("example 4" , this)
}
myInfo();       //this is a regular function call.



// <-----------------------------------------example 5-------------------------------------------------------->
//for all regular function calls 'this' points to window object.
var Person = {
    name: "Mudasir",
    age:    18,
    FuncExample: function(){
        console.log("line 62",this)
    }
}
Person.FuncExample();   //this is not a regular function call.