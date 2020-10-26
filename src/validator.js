const validator = {
  
  function isValid(creditCardNumber){
    let array = Array.from(creditCardNumber);
    inverseArray = array.reverse();
    for(let i = 0; i<=inverseArray.length; i++){
      if(i%2 === 0){
        let evenNumber=parseInt(reversearr[i])*2;
        if( evenNumber > 9 ) {
          evenNumber = evenNumber -= 9;}
        else (evenNumber <= 9) {
          evenNumber = evenNumber * 1;
        }
        evensum += evenNumber; 
        }
      else (i%2 !== 0){
        let oddNumber=parseInt(reversearr[i]);
        oddsum += oddNumber;
      }
      totalsum = pairsum + oddsum;
    }
      if(totalsum % 10 === 0){
      document.write("tu tarjeta es valida, puedes usarla en el comercio.");
    }
      else(totalsum % 10 !== 0){
      document.write("tu tarjeta es invalida, por favor comunicate a la brevedad al 8007000100 para ayudarte.")
      }
    }
  function Maskify(creditCardNumber);
  
  }


export default validator;
// aqui van las funciones Valid y Maskify
