class person{

    constructor(pehlanaam, surname){

        this.xyz=pehlanaam;
        this.abc=surname;
    }
   getfullname(){
    return `First name = ${this.xyz} and last name = ${this.abc}`;   }

}

class police{

    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }

}


let p1=new person ("yash", "Mandhare ");

// console.log(p1.getfullname());


let p2=new police("umesh", "Rathod ");
p2.__proto__=p1;
p1.__proto__=null;
 
console.log(p2.getfullname());
console.log(p1.toString());


