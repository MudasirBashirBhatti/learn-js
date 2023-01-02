//we use while loop when we don't know how much data is going to print.

let i = 1;
let myVar = "";
while (i <= 10) {

    myVar += '5 x ' + i + '=' + (i * 5) + "<br>";
    i++;
}
document.write(myVar)