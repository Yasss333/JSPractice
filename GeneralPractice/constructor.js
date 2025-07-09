class person {

    constructor(fname, Lname)
    {
        this.fname=fname;
        this.Lname=Lname;
    }

    getfullname(){
     console.log(` ${fname} ${Lname}`);
             
    }
}

let yash=   new person ("Yash ", "Mandhare");

console.log(yash);
