let person1={
    name:"yash",
    greet: function(){
        console.log(`Hello ${this.name}`);
        
    }
}

console.log(person1.greet);
