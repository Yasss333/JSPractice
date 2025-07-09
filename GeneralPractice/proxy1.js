let details={
    name :"Yash",
    age: 23 ,
    password: 123
}

const proxyuser= new Proxy(details , {
    get(target, prop ){
        console.log(prop);
        
        if (prop==="password") {
            console.log("Error");
            
        }
        
        return target[prop]; 
       
    },
});

console.log(proxyuser.password);
