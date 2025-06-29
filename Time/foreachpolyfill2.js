if (!Array.prototype.myforeach) {
    Array.prototype.myforeach = function (cb) {
        for (let i = 0; i < this.length; i++) {
          cb(this[i],i);
         };
    };
};

if (!Array.prototype.mymap) {
    Array.prototype.mymap = function (cb){
        let result=[];
        for (let i = 0; i < this.length; i++) {
            let value =cb(this[i],i);
            result.push(value);            
        }


        return result;
    }
    
}


// arr.myforeach((value , index ) =>
    // {    console.log(`At index ${index} , value is : ${value}`)
// }
// );

// const trippled=arr.mymap((n)=> n*3);

// console.log(trippled);


// let sum= arr.reduce((acc, curent)=>{
//     return acc+curent;
// },0);

// console.log(sum);

const arr=[1,2,3,4,5,6];

let reduced =arr.reduce((acc, curr) => acc + curr, 10);
console.log(reduced);



// if(!Array.prototype.myreduce){
//     Array.prototype.myreduce=function (cb){
//         let sum=0;  
//         for (let i = 0; i < this.length; i++) {

//             sum=cb(sum,this[i]);  

            
//         }
//         return sum;

//     }
// }

// let summation=arr.myreduce((acc, current)=> acc+current );

// console.log(summation);
