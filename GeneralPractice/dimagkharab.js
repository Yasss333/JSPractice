let person1={
    
    name:"yash"  ,
    greet : function () {
        console.log(` Hello , ${this.name}`);
        
    }
}

setTimeout(person1.greet.bind(person1),3*1000)
// person1.greet(); 

let person2={
    name:"Shreyash"
}

// person1.greet.call({ work:"Omkumar"})

// let info=person1.greet.bind(person2);

// info("yash")
