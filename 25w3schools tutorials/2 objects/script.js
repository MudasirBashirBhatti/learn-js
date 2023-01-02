var cars = {color:"Yellow" , model:"500", type:"Suzuki"}
document.write(cars.color, " " ,cars.type,"<br>");
document.write(cars.model,"<br><br><hr>")





var person = {
    firstname:"Mudasir" , 
    LastName:"Bashir",
    age:"19"
}
document.write(person["LastName"] + "<br>")
document.write(person["age"] + "<br><hr>")







/*In a function definition, this refers to the "owner" of the function.In the example below, this is the person object that "owns" the fullName function.In other words, this.firstName means the firstName property of this object.*/
var person_2 = {

    firstName:"John",
    lastName:"Doe",
    id: 5533,
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }

    
};
document.write(person_2.fullName())
