// let inventory=[

//     { name:"MaterialA", stock:200},
//     { name:"MaterialB", stock:10},
//     { name:"MaterialC", stock:20},
//     { name:"MaterialD", stock:50},
// ]

// let availableStock=inventory.filter((item=>item.stock>=50));
    
// console.log(availableStock);

let useractvivity=[

    {name:"yash",count:23},
    {name:"sai",count:43},
    {name:"om",count:233},
]

let mostactive=useractvivity.reduce((maxuser, user)=>{
    return user.count > maxuser.count ?  user : maxuser;
}   )

console.log(mostactive);
