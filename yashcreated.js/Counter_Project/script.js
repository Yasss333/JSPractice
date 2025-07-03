
// alert('yash');
const startbutton = document.getElementById("Startbutton");
const input = document.getElementById("timeInput");
const para = document.getElementById("displaycount");
const refbutton = document.getElementById("Refresh");
const       pausebutton=document.getElementById('pauseButton');

let intervalid;
let valueinseconds;


let f=function timer() {
    let valueinSeconds=parseInt(input.value);

    if (isNaN(valueinSeconds)) {
        para.innerText='Please enter valid Nuber';
        // clearTimeout()
        // clearInterval(timer)

        setInterval(f,1*1000)
        return      
        
    }
    if (valueinSeconds<0) {
        para.innerText = "Please enter valid +iveText";
        return 
    }

    // clearInterval(intervalid);



    let intervalid=setInterval( ()=>{
        valueinSeconds--;
        para.innerText=` Timer is ${valueinSeconds} seconds `;
        // disable(input);
        // disable(starbutton)

        if (valueinSeconds<=0) {
            clearInterval(intervalid    );
            para.innerText='Time up ⏱️'
        }
    },1*1000); 
}


function  Refresh() {
    // clearTimeout
    para.innerText= "timer reset";
    input.value='';
    clearInterval(intervalid);
    // console.log('yash');

    
}

function pause(){
    clearInterval(intervalid);
    para.innerText='STOP';
    // console.log('yash');
    alert('Stopped')
    
} 



startbutton.addEventListener('click',f);

refbutton.addEventListener('click',Refresh);
pausebutton.addEventListener('click', pause )