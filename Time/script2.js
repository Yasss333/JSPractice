
function updateclock() {
    let Time=document.getElementById("time");
    let Date=document.getElementById("date");
    
let now =new Date();

let hours =now.getHours() %12 || 12;
let minutues =now.getMinutes().toString().padStart(2,"0");
let seconds=now.getMinutes().toString().padStart(2,"0");
let ampm= hours>12 ? "PM": "AM";

Time.textContent=` ${hours}:${minutues}:${seconds}:${ampm}`;

}
setInterval( updateclock,1000)

updateclock();
