// function stall(x){
    
//     if (x == "Masala") {
//       console.log("here is your masala Chai ");
//     } else console.log("here is you normal tea ");
    
// }

// stall("chai");



function shop(price){

    // if (price>1000) {
    //   return  (price-price*0.10);
          
    // } else {
    //     console.log(`your total price is : ${price}`);
        
    // }

    return price>1000 ? price*0.9 : price;
}

console.log(shop(1200));




function traffic(light){
  
    switch(light){
        case "red":console.log("STOP")
        return;

        case "yellow":console.log("slow down ")
        return;
        
        case "green":console.log("Go")
        return;

        default:
            console.log("invalid")
            return;
            
        
        
    }
}

// traffic("ye");