let person1={
    name:"Yash",
    greet :function(){
        console.log(`hye hello ${this.name}`);
        
    }
}

let person2={
    name:"Onkar"
}
let binded =person1.greet.bind(person2);


// binded();   
