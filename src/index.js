import validator from './validator.js';

console.log(validator);

//traer elemento del formulario para validar la tarjeta
const validate = document.getElementsByClassName("button");
let creditCardNumber = "";
//por medio del onsubmit traer el elemento de texto y enlazar a la funcion validadora.
validate.onsubmit = function cardValidate() {
    /* por medio de un bucle do obligamos a que se genere el documento, el cual se guardara en una variable en caso de que esta
    cumpla con las condiciones dadas entro del ciclo.*/
    do { //primero se obtiene la conexion entre el valor y la funcion isVal
    creditCardNumber = document.getElementById("number").value;
    if (creditCardNumber !== '') {
        isValid(creditCardNumber);
    }
    else {
        alert("por favor ingrese un valor valido");
    }
    if (creditCardNumber > 4){
        maskify(creditCardNumber);
    }
}
}

