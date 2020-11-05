const validator = {
  //agrego funcion isValid
  isValid:(creditCardNumber) => {
    /*declaro las variables de suma, que al ser 0 retornan como false pero que a 
    lo largo del proceso se vuelvan true al cambiarles el valor
    evenSum suma de numero pares; oddSum suma numeros impares; sum es la suma final */
    let sum = 0;
    /*transformo el valor obtenido desde el onclick en un array inverso por 
    medio de split(), reverse() y join tome la referencia de uso desde MDN*/
    let inverseArray = creditCardNumber.replace(/[^0-9]/g, '').split('').reverse('').join('');
    /*por medio de un ciclo for pido que recorra el array de los valores que necesito
    donde le digo qque tome desde el cero, que tome como condicion que el largo sea 
    igual o menor a i; y que por cada ciclo i aumente en una posicion.*/
    for(let i=0; i < inverseArray.length; i++){
      //declaro que tome los valores desde el array, convirtiendo el string en numero
      //por medio de parseInt()
      let evenNumber = parseInt(inverseArray[i]);
      //declaro un condicional para que separe la suma de los valores pares, los otros los toma por defecto
      if(i%2 === 0){
        //declaro nueva variable para que multiplique los numeros por dos
      let newEvenNumber = evenNumber * 2;
      /*declaramos otra condicional if para que sepa que en caso mayor a 10 los sume
        caso contrario retorne el numero como se proceso anteriormente*/
      if(newEvenNumber > 9) {
        evenNumber -= 9;
      }
    }
    /*haago la suma de los valores modificados y los valores adicionales que recorre el array por default */
      sum += evenNumber;
    }
    /*posteriormente si el valor del residuo de la suma y 10 es igual a 0, 
        retorna true y si no retorna false */
    if(sum % 10 === 0){
    return true;
    } else {
    return false; 
    }
  /*,
   maskify:(creditCardNumber) => {
    let number = '';
    let maskifyCardNumber= '';
    let fullNumber= '';
    if (creditCardNumber.value > 4) {
      let maskifyNumber = creditCardNumber.toString();
      let maskifyStringNumber = maskifyNumber.slice(-4);
      maskifyCardNumber = maskifyStringNumber.replace(/[0-9]/g,'*');
      } 
      fullNumber = maskifyCardNumber + number.slice(-4);
      return fullNumber;
   } */

  }
}


export default validator
