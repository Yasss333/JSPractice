const patanahi= (fn, delay)=>{
    let myId=null;
    return (...args) =>{
        if(myId===null){
            fn(...args)
            myId=setTimeout(() => {
                myId=null;
            }, delay);
        }
    }
}

function greet() {
  console.log(`Yash Ruko 3 sec`);
}

let sachmenahipata=patanahi(()=> greet(),6000);


sachmenahipata();
sachmenahipata();
sachmenahipata();

