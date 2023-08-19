var nombre = 'Lando';
var apellido = 'Norris';

var nombreCompleto = nombre + ' '+ apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Lando'+' '+'Norris';
console.log(nombreCompleto2);

//contexto de cadena
var x = nombre + 1 + 4;
console.log(x);

x = nombre + (2+4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);