// let count=0 ;

// function increment () {
//     count++;
//     console.log(count);
// }

// increment();
// increment();
// increment();
// increment();
// increment();
// increment();
// increment();
// increment();
// increment();


function manager() {
    let count=0;
    return function     () {
        count ++;
        return count;
    };
}

const x=manager();

const y=manager();



console.log(x());
console.log(x());
console.log(x());
console.log(y());
console.log(y());