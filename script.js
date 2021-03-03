//////////////////////////////////////////////////////////
/////////// HEY KIDDO 
//////////////////////////////////////////////////////////

const isPersonAdult = (ageOfPerson) => {
    console.log("checking age of a person..")
    if (ageOfPerson >= 18) {
        return true
    } else {
        return false
    }
}



const greetPersonDependingOnAge = (ageOfPerson) => {
    console.log("deciding how to greet a person..")
 if (isPersonAdult(ageOfPerson)) {
     return "Hello there!"
 } else {
     return "Hey kiddo!"
 }
}


console.log(greetPersonDependingOnAge(16));
console.log(greetPersonDependingOnAge(50));





//////////////////////////////////////////////////////////
////////// VAT exercise 1
//////////////////////////////////////////////////////////


const getVATamount = (basePrice, VAT) => {
    console.log("calculating amount of VAT..")
   return basePrice * (VAT/100);
}


const getPriceWithVAT = (basePrice, VAT) => {
    console.log("calculating Price including VAT..")
return basePrice + getVATamount(basePrice, VAT)
}

console.log(getPriceWithVAT(800, 21));






//////////////////////////////////////////////////////////
////////// VAT exercise 2
//////////////////////////////////////////////////////////



const getVATamount1 = (amountWithVAT, VATpercentage) => {
    console.log("calculating amount of VAT..")
return  amountWithVAT - (amountWithVAT/(VATpercentage/100 + 1));
}



const getBasePriceAndVATamount = (amountWithVAT, VATpercentage) => {
     console.log("calculating base price and VAT amount..")
     const VATamount = getVATamount1(amountWithVAT, VATpercentage);
     const basePrice = amountWithVAT - VATamount;
     const VATamountAndBasePrice = [];
     VATamountAndBasePrice.push(basePrice, VATamount);
     return VATamountAndBasePrice
}

console.log(getBasePriceAndVATamount(968, 21));
