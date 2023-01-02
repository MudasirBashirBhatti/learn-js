//<---------------------------------Code for buttons-------------------------------------->

let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let screenValue= '0';
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;

        if(buttonText == "x"){
            buttonText = "*";
            screenValue += buttonText
            screen.value = screenValue;
        }
        else if (buttonText =='C'){
            screenValue = "";
            screen.value = screenValue

        }

        else if (buttonText =='='){
            screen.value = eval(screenValue)
        }
        else{
            screenValue +=buttonText
            screen.value = screenValue
        }
    })
}



//<------------------------------------Code for Sound  ------------------------------->


click = document.querySelectorAll('button')         //we have create click and sound by own

for(sound of click)
sound.addEventListener("click",(e)=>{               //syntax of addEventListner is: object.addEventListener("what to do", function name)
    var clickSound = document.getElementById("audio");
    clickSound.play();
})



//<---------------Not get solution--------------->

// function func(){
//     let input1 = parseInt( document.getElementById("screen").value)
    
//     document.getElementById("screen").innerHTML = Math.sqrt(input1)
//     }