const colorinput = document.getElementById("colorinput");
const colorcode = document.getElementById("colorcode");
const copy_button = document.getElementById("copy_button");
const complementary = document.getElementById("complementary");
const savecolor = document.getElementById("savecolor");     
const favcolorcontainer = document.getElementById("favcolorcontainer");

colorinput.addEventListener("input",()=>{
   const selectedcolor= colorinput.value;
   console.log(selectedcolor);
   
    updatecolorcode(selectedcolor);
    complementarycolor(selectedcolor);

});
function updatecolorcode(color){
   colorcode.textContent=color  ;
   colorcode.style.color=color;

}

function complementary(color) {


}




