class house{

    constructor(paint,naam){
        this.paint=paint ;
        this.naam=naam;
    }

    fulldetail(){
        console.log(`The color is ${this.paint} , and the name of building is ${this.naam}`);


        
    }
}

let newbuilding=new house("blue", "Victoria");
// console.log(newbuilding);

console.log(newbuilding.fulldetail()) ;

