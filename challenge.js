let sales =[
    {product:"watch", price:200},
    {product:"phone", price:2102},
    {product:"pen", price:100},
    {product:"book", price:1100}
];
 
// console.log(sales.length);



let Maxexp=sales.reduce((maxitem,item)=>{
    return item.price>maxitem.price ? item : maxitem;
    
});

// console.log(Maxexp) ; 


// let totalsales=sales.reduce((a,b)=>{
//     return a+b.price;

// },0);

let nums = [10, 20, 30, 40, 50];

let maxnumber=nums.reduce((maxnumber,item)=>{
    return item>maxnumber ? item : maxnumber;
});

console.log(maxnumber);



// let totalNum=nums.reduce((sum,numbers)=>{
//     return sum + numbers  ;
// },0);

// console.log(totalNum);




