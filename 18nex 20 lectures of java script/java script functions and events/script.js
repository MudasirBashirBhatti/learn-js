
//(lecture 21)
//We can call a function any time when we need it. in the programming and it will add in the script.
// you just need to enter the function name.

function hello(){               //example function 1
    document.write("What is your name", "<br>","<br>")
}

function Mudasir(){             //example function 2
    document.write("My name is Mudasir Bashir", "<br>","<br>")
}
hello();
Mudasir();
hello();







//(lecture 22)
//functions with parameters is used to add same function with different values.
function add(a,b){                              //Example function 1
    document.write(a+b,"<br>")
}

function subtraction(a,b,c){                    //Example function 2
    document.write(a + b * c + "<br><br>")
}

add(3,10)
add(20,13)
subtraction(2,3,4)

function welcome(fname,lname){                  //Example function 3
    document.write("Hello" +" " + fname + " " + lname + "<br><br>")
}

welcome("Mudasir","Bashir")

function welcome2(fname="First Name",lname="last Name"){                  //Example function 4(if we add value than it will override the original value)
    document.write("welcome" +" " + fname + " " + lname + "<br><br>")
}


welcome2("Mudasir","Sahib");




//(lecture 23)
//function with return value to call the var or value any where in the page

function fullname(_fname,_lname){               //example 1
    var a = _fname + " " + _lname
    return a;
}

var fn = fullname("Mudasir","Bashir");
document.write(fn + "<br><br>");



function sum(Math , Physics , Chemistry, Bio){          //example 2 for percentage calcualtion
   
var sumcaculate = Math + Physics + Chemistry + Bio;
return sumcaculate;
}

function percentage(tt){
    var per = tt/400*100;
    document.write(per);
}

var total = sum(44,24,12,98);

percentage(total);






// (lecture 25)
// java script events are used to no autorun the function

function clickme(){
    alert("hello world")
}






//(lecture 26)

var z = 10          //This is global variable and will execute when we write doc.write outside of funtion
function myFunctions(){
    var z= 20;      //This is local variable and will execute only when we write doc.write inside of function.

}
document.write(z,"<br><br>")

myFunctions();




//(lecture 27)  There are two types of function parametrize and non parametrized function. The above example is for non parametrized funtion.and below is for parametrized function

function xyz(x,y){                          //This is the exmaple of parmetrized function
    document.write(x+y +"<br><br>");
}
xyz(5,3);




// (lecture 28)
// we use the return if we wanted to perform some action after some calculation.

function useOfReturn(x,y){
    return(x+y)
}
    var result = useOfReturn(10, 15);
    document.write(result + 10 , "<br><br>")








// (lecture 29)
// anonymous function we used if the two external files have same variables initilized with Let.
//(i)   first method of anonymous function
(function (){
    let x=2
    let y = 3
    document.write(x+y + "<br><br>");
})();

//(ii)   second method of anonymous function
var x = function () {
    document.write(x);
    
}
x();





// .length
// .search()
// .