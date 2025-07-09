class  a {
    inside(){
        return "yash";
    }
}

class b extends a {
    insideb(){
    return 'Madhare ';
    }
}


let copy=new b;
b._proto_=a.prototype;


// console.log(copy.insideb());
// console.log(copy.inside());


// let addition= function(x,y){
//     return x+y;
// }

let addition =(x,y)=>{
    return x+y;
}

console.log(addition(2,3));


