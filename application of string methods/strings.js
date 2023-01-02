let UpCase=()=>{
    let textArea = document.getElementById("myText").value;
    var x = textArea.toUpperCase();
    document.getElementById("myText").value = x;
}

let LoCase=()=>{
    let textArea = document.getElementById("myText").value;
    var x = textArea.toLowerCase();
    document.getElementById("myText").value = x;
}

// Show how many characters are written 

let char=()=>{
    let textArea = document.getElementById("myText").value;
    let Result = document.getElementById("nChr");
    var x = textArea.length;
    Result.innerHTML =`Characters: ${x}`;
}
let words=()=>{
    let textArea = document.getElementById("myText").value;
    let Result = document.getElementById("nWord");
    var x = textArea.split(" ");
    var y = x.length-1;
    Result.innerHTML =`Words: ${y}`;
}

let copy = () => {
    let textarea = document.getElementById("myText").value;
    // let copy = textarea.select();
    navigator.clipboard.writeText(textarea.value);
}