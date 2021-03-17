//Multiplos comprendidos enre 4 y N, donde N es un valor introducido por consola
var numero = prompt("Escribe un numero")
var primos = []
for(var i = 4; i<numero; i++){
    if(i%4=== 0){
        primos.push(i)
    }
}
console.log(primos)