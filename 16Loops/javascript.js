//lecture 1
//for loop is mostly used to print same line thousands of time
for (let x=0 ; x<= 5 ; x++) {

    document.write("Programming with mudasir <br>")
}
document.write("<hr>")









//lecture 2
//while loop is used when we dont know how much data will be printed
var x = 1
while (x <= 5) {
    document.write(x + ") " + "programming with Mudasir <br>")
    x++;
}
document.write("<hr>")



//real life example of while loop
// find the sum of even numbers b/w 0 to 100
let xy = 1;
let sum = 0;
while(x <= 100){
    if(x % 2 == 0){
        sum = sum + xy
    }
    x++;

}

document.write(sum)
document.write("<hr>")








//lecture 3
// do while loop will must print one time although our condition is wrong

var x = 1;
do {
    document.write(x * 3 + "<br>")
    x++;
} while (x <= 10);
document.write("<hr>")









//lecture 4 
//break will break our loop and go out from loop at particular condition
var x= 1           //example 1
while (x <= 10) {
    if(x==5){
    break}

document.write(x * 2 + "<br>")
x++;
}



for (y=1 ; y<=10 ; y++) {
    if(y==5){
        break;
    }
    document.write("hello world<br>")
    
}
document.write("<hr>")








//lecture 5 
//continue is used to remove overwritten value in loop
for (y=1 ; y<=10 ; y++) {
    if(y==5){
        document.write(y * 5 + " (This is line 5)<br>")
        continue;      //remove continue and see the effect
    }
    document.write(y * 5 + "<br>")
    
}
document.write("<hr>")



for (hello=1 ; hello<=10 ; hello++) {
    if(y==5){
        continue;      //this time will continue will remove 5
    }
    document.write(y * 5 + "<br>")
    
}
document.write("<hr>")






//forEach loopis used for arrays

var arr = ["Mudasir" , "Mubashir" , "Muammir"]        //first method
arr.forEach(function(air,ind){      //air is for print name and ind is for index number we can use any name
    document.write(air + " " + ind + "<br>")
})
document.write("<hr>")

var newVar = ["Pakistan" , "China" , "Afghanistan"];   //second method
newVar.forEach(myFunc);
function myFunc(val){
document.write(val,"<br>");
}
document.write("<hr>")










//nested loop       (loop inside the loop is called nested loop)

for(let counter=1 ; counter<=3 ; counter++){
    document.write(counter + "<br>")

    for(let x=1 ; x<4 ; x++){
        document.write("Tech" + "<br>")
    }
}
document.write("<hr>")










//labeling to break the loop
// we use outer label to break loop 
// if we label it to any innerloop it will break inner loop
// by labeling we can break any loop may be nested or outer loop.

outer : for(let x=1 ; x<=10 ; x++){
    document.write(x + "<br>")
    for(let y=1 ; y<3 ; y++){
        
        if(x===3){
            break outer
        }
        document.write("hello world <br>")
    }
}