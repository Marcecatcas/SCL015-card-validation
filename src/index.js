import validator from './validator.js';

 //console.log(validator); 

const validate = document.getElementById('submit');
let creditCardNumber = '';

validate.addEventListener('click',validar)
function validar(){
   creditCardNumber = document.getElementById('number').value;
   if(creditCardNumber !='') {
    isValid(creditCardNumber);
   }
  if(creditCardNumber > 4) {
    maskify(creditCardNumber);
} else{
    alert("por favor ingresa numero valido");
}
}