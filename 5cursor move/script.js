const mymouse = (event) =>{
    console.log(`x value = ${event.clientX} & y value = ${event.clientY}`);
}
window.addEventListener('mousemove' , mymouse);