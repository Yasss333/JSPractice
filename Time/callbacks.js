sum (2 , 3, (result )=>
{
console.log(`result is `, result);

});


function sum (a, b, cd){
    setTimeout(()=>{cd(a+b);}, 3*1000);
}