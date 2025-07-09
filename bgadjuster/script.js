const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

function changebg() {
    console.log('yash');
    
    
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    
    const color = `rgb(${r}, ${g}, ${b})`;

    console.log(color);
    
    document.body.style.backgroundColor=color;


}




red.addEventListener('input',changebg)
green.addEventListener('input',changebg)
blue.addEventListener('input',changebg)