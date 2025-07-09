// let arr=[1,2,3,4,5,6,7,8];


// const n3=arr.myfilter((e)=>e%2==0);

// // console.log(n3);

// if (!Array.prototype.myfilter) {
//     Array.prototype.myfilter = function (userfn) {
//         const orrginalarr=this;

//         for (let i = 0; i < orrginalarr.length; i++) {
//             userfn(orrginalarr[i],i); 
//         }
        
//     }
    
// }






let arr = [1, 2, 3, 4, 5, 6, 7, 8];

if (!Array.prototype.myfilter) {
  Array.prototype.myfilter = function (userfn) {
    const originalArr = this;
    const result = [];

    for (let i = 0; i < originalArr.length; i++) {
      if (userfn(originalArr[i], i)) {
        result.push(originalArr[i]);
      }
    }

    return result;
  };
}

const n3 = arr.myfilter((e) => e % 2 === 0);
console.log(n3); // [2, 4, 6, 8]
    
