function wait(seconds){
    return new Promise ((resolve , reject )=>{
        setTimeout(() => {
            reject()
        }, seconds*1000);

    })
}

wait(5)
 .then(()=> console.log("doone ho gaya"))
 .catch(()=> console.log("error"))
 .finally(()=> console.log('mai toh har bar run hota hu no matte rwhat '));
 
