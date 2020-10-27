const validator = {
  function isValid(creditCardNumber){                         //primero armamos la funcion para validar por Algoritmo de luhn
    let array = Array.from(creditCardNumber);                 //pedimos que genere un array desde el numero obtenido en el archivo index.js
    inverseArray = array.reverse();                           //invertimos el array usado
    for(let i = 0; i<=inverseArray.length; i++){              //aplicamos un ciclo for donde definimos variable, largo a evaluar y el aumento
        if(i%2 === 0){                                        //por medio de if le decimos que tome todo lo que residuo de 2 de 0 (par)                                               
        let evenNumber=parseInt(reversearr[i])*2;             //se pasa el valor obtenido de string a number por medio de parseInt y se multiplica por 2
        if( evenNumber > 9 ) {                                //agregamos una condicion if... else adicional para separar los mayores y menores de 10
          evenNumber = evenNumber -= 9;}                      //si el numero al ser multiplicado es mayor a 9 se le resta 9 al resultado  
        else (evenNumber <= 9) {                              
          evenNumber = evenNumber * 1;                        //si es menor o igual a 9 se multiplica por 1 para conservar el numero.
        }
        evensum += evenNumber;                                // pedimos la sumatoria de todos los numeros por medio del +=
        }                                                     // cerramos el if... else anterior y abrimos otro para los numeros impares
      else (i%2 !== 0){                                       // si el residuo es distinto a 0, aplicamos otra variable
        let oddNumber=parseInt(reversearr[i]);                // le pedimos igual que antes que pase a number el string del array
        oddsum += oddNumber;                                  // generamos la suma de estos valores
      }
      totalsum = pairsum + oddsum;                            // pedimos la suma total del array 
    }
      if(totalsum % 10 === 0){                                //para terminar de validar, si el residuo es 0. la tarjeta es valida.
      document.write("tu tarjeta es valida, puedes usarla en el comercio.");
    }
      else(totalsum % 10 !== 0){                              // si el residuo es distinto de 0 la tarjeta es invalida.
      document.write("tu tarjeta es invalida, por favor comunicate a la brevedad al 8007000100 para ayudarte.")
      }
    }
  function Maskify(creditCardNumber);

  }


export default validator;
// aqui van las funciones Valid y Maskify
