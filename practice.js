Function.prototype.describe=function (name) {
    console.log(`Function name is ${this.name}`);
    
}

function greet(name){
    return ` hello ${name}`;
}
// console.log(Function.describe("yash"));
greet("yash");
greet.describe("yash");
// console.log(greet("yash"));


// let p1=new Function.describe



addition=(a,b)=>{
    return a+b;

}

// console.log(addition(2,3));


function applyoperation(a,b,operation) {
    return operation(a,b);
    
}

let result=applyoperation(4,2,(x,y)=>x/y);

// console.log(result);
(function () {
    console.log("Yash");
    
})


()

