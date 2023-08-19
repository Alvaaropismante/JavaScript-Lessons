/* 
ejemplos de tipos 
de datos en JS
*/

//tipo de dato estring
var nombre = "alvaro";
console.log(nombre);

nombre = 10;
console.log(typeof nombre);

//tipo de dato numérico
var numero = 1000;
console.log(numero);

//tipo de dato object
var objeto = {
    nombre : "Alvaro",
    apellido : "Pismante",
    telefono : "11223344"
}

console.log(typeof objeto);

//tipo de dato boolean (true, false)
var bandera = false;
console.log(bandera);

//tipo de dato function
function miFuncion() {
    
}

console.log(miFuncion);

//tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//tipo clase es una función
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(persona);

//tipo undefined
var x;
console.log(x);

x = undefined;
console.log(x);


//null = ausencia de valor
var y = null;
console.log(y);

var autos = ['BMW', 'audi', 'ferrari'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);