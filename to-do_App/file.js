const inputoftask = document.getElementById("inputtask");

const addbtn = document.getElementById("addtion");

const listcont = document.getElementById("list");

addbtn.addEventListener('click',()=>{

    const value =inputoftask.value;

    // console.log(value);

    // const li =value ;

    // console.log(li);


     const li =document.createElement('li');

     li.innerText=value;

     listcont.appendChild(li);
     listcont.value="";


     const delbtn=document.createElement('button');
     delbtn.innerText="X";
   delbtn.addEventListener('click',()=>{
    li.remove();
   })

     li.appendChild(delbtn);




    
})