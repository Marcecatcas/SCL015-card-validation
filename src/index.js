import validator from './validator.js';

console.log(validator); 

//guardar el valor obtenido mediante una variable
const validate = document.getElementById('submit');
let creditCardNumber = '';
//llamar al elemento por medio del evento onclick
validate.addEventListener('click',validar)
//llamamos a la funcion validar para obtener el valor guardado, que 
//corresponde a un string.
function validar(){
   creditCardNumber = document.getElementById('number').value;
   /*le decimos que si ese valor es distinto de vacio se ejecuten tanto la
   //funcion isValid como la funcion maskify.*/
   if(creditCardNumber !='') {
    const validate = validator.isValid(creditCardNumber);
    //dependiendo del valor de retorno lanza las alertas respectivas.
     if(validate === true){
     alert("tu tarjeta es valida, puedes usarla en el comercio.");}
     else {
     alert("tu tarjeta es invalida, por favor comunicate a la brevedad al 8007000100.");
    }
  }
}
//lamamos al evento relacionado con el cuadro de texto
let maskifyNumber = document.getElementById('number');
//llamamos al evento para que guarde los valores
maskifyNumber.addEventListener('keyup',enmascarar)
function enmascarar(){
   creditCardNumber = document.getElementById('number').value;
   if(creditCardNumber.length > 4)
   return validator.maskify(creditCardNumber).value;
   /*maskifyStringNumber = validator.maskify(creditCardNumber);
   //tambien le decimos que si encuentra una cantidad de caracteres mayor a 4 que ejecute la funcion maskify
   return maskifyStringNumber;*/
}
