function aleatorios(numero){
    return Math.round(Math.random()*(numero-1));
}
console.log()

function generarNumeros(numeros) {
    var response = []
    var suma=0
    for (let num = 0; num <= numeros; num++) {
        var res = aleatorios(num) 
        response.push(res)
        if(num %2){
            suma = suma+num
        }
        else if(num % num === 0 || num % 1 === 0){
            suma = suma+num

        }
    }
  
  console.log(response);
  console.log(suma)
}

