const validator = {
  isValid:(creditCardNumber) => {
    let evenSum;
    let oddSum;
    let sum = 0;
    let array = Array.from(creditCardNumber);
    let inverseArray = array.reverse();
    for(let i=0; i <= inverseArray.length; i++){
    if(i%2 == 0){
      let evenNumber=parseInt(inverseArray)*2;
      if(evenNumber > 9) {
        evenNumber = evenNumber -= 9;
      }
      else{
        evenNumber = evenNumber * 1;
      }
      evenSum += evenNumber;
    }
    else {
      let oddNumber = parseInt(inverseArray);
      oddSum += oddNumber;
    }
      sum = evenSum + oddSum;
    }
    if(sum % 10 === 0){
      alert("tu tarjeta es valida, puedes usarla en el comercio.");
    } else {
      alert("tu tarjeta es invalida, por favor comunicate a la brevedad al 8007000100.")
    }
  }
   //maskify:(creditCardNumber) => {}

}
export {validator}
