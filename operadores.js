//suma
let a = 3, b = 2;
let z = a + b;
console.log("resultado de la suma"+ ' '+ z);

z = a-b;
console.log("el valor de la variable z es: "+z);

z = a*b;
console.log("el resultado de la multiplicación: "+ z);

z = a/b;
console.log("el resultado de la división: "+ z);

z = a% b; //muestra residuo de la división.
console.log("operación modulo: " + z);

z = a ** b; //3 elevado a 2
console.log("operador exponente: "+ z);

//incremento
//1.-pre-incremento (el operado ++ antes de la variable)
z = ++a;
console.log(z);
//1.-post-incremento (el operado ++ despues de la variable)
console.log(b);
z = b++;
console.log(b); //la variable se incrementa luego de ser utilizada
console.log(z);


//Decremento
//1.- pre-decremento
console.log(z);
console.log(a);
z = --a;
console.log(z);
console.log(a);

//2.- post decremento
console.log(z);
console.log(b);
z = b--;
console.log(z);
console.log(b);

