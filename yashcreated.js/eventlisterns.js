function change(color) {
        document.body.style.backgroundColor=color;
     
     
    }
    

// const mode = document.getElementById("theme");


// mode.addEventListener('click',function () {

//     change("black"); 

//     console.log("I got clicked ");
    
// })

const mode = document.getElementById("theme");

mode.addEventListener('click',()=>{


    console.log("toggling mode is activated");

    const currentcolor =    document.body.style.backgroundColor ;

    if (!currentcolor || currentcolor=="white") {
        change('black');
        // document.write("dark mode");
        // alert("dark mode")
      mode.innerText="Dark-Mode";
    }
    else{
        change("white");
        
        mode.innerText="White-Mode";
        // document.write("WHite mode");
    }
    

})