function nahipata(fn, delay){
    let myId;
// console.log(arguments);

    
    return function (...args) {
        console.log(args);
        clearTimeout(myId);
        myId=setTimeout(() => {
            fn.apply(this, args );
        }, delay);        
    };
}

function greet(name) {
    console.log(`hello ${name}`);
    
}


let sachmenahipata=nahipata(()=> greet("Yash"), 2000);

sachmenahipata();
sachmenahipata();
sachmenahipata();