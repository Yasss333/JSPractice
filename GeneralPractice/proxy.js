let person={
    name:"yash",
    age:23,
    password:123,

}


const proxyUser=new Proxy(user, {
    get (target,prop){
        console.log(target[prop]) ;
        if (prop==="password") {
            throw new Error ("Access Denied ");

            
        }
        return target[prop];
        
    }
});


console.log(proxyUser.password);
