// let expense=[

//     {description:"groc",amount:50,category:"food"},
//     {description:"Elect bill",amount:100,category:"utilities"},
//     {description:"dinner",amount:30,category:"food"},
//     {description:"internet bill",amount:50,category:"utilities"},
// ];

// let expenseTracker=expense.reduce((sum, item)=>{
//     return item.category=="food" ? sum +item.amount: item.amount;
// }       );

// console.log(expenseTracker);


// let task=[
//     {description:"write Report",completed:false,priority:2},
//     {description:"Send email",completed:true,priority:3},
//     {description:"  Prep presentation ",completed:false,priority:1},
// ];

// let uncompleteTask=task
//     .filter((taskc)=>
//      taskc.completed == false ) 

//     .sort((a,b)=>a.priority-b.priority);
//  ;

// console.log(uncompleteTask);

// console.log(uncompleteTask.sort());

// console.log(reaminingTask);


let movierating=[
    {movietitle:'pushpa', rating:[1,2,3]},
    {movietitle:'bahubali', rating:[4,3,3]},
    {movietitle:'omshanti', rating:[6,2,3]},
];


let Report=movierating.forEach((movie, index)=>{
    let sum=movie.rating.forEach((number,index)=> number+index,0);
     let average=sum/;

     return average;

})

console.log(Report);
