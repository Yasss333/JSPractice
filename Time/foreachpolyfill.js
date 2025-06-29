// if (!Array.prototype.myforeach) {
//     Array.prototype.myforeach = function (cb) {
//         for (let i = 0; i < this.length; i++) {
//           cb(this[i],i);
//          };
//     };
// };

// const arr=[1,2,3,4,5,6];

// arr.myforeach((value , index ) =>
// {    console.log(`At index ${index} , value is : ${value}`)
// }
// );
    
// const double= (n)=> n*2;

// console.log(double(2));

// const add3numbes= (a, b, c)=> a+b+c;

// console.log(add3numbes(1,2,3));


// const nopara=()=>
//     "Hello Yash";
    
// console.log(nopara());


let arr=[1,2,3,4,5];

// let double= arr.map((n)=>
//      n*2
// );

// console.log(double);

let filtered= arr.filter((n)=> n%2==0);

console.log(filtered);
