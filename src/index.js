import validator from './validator.js';

console.log(validator); 

const validate = document.getElementById('submit');
let creditCardNumber = '';

validate.addEventListener('click',validar)
function validar(){
   creditCardNumber = document.getElementById('number').value;
   if(creditCardNumber !='') {
    validator.isValid(creditCardNumber);
   }
  if(creditCardNumber.length !== '') {
    validator.maskify(creditCardNumber);
} else{
    alert("por favor ingresa numero valido");
}
}