let a = 8;
let min = 0, max = 10;

//operador AND (&&)
if (a >= min && a <= max) {
    console.log(a+ " esta dentro del rango de ["+min+","+max+"]")
}
else{
    console.log(a+" esta fuera de rango")
}


//operador or (||) regresa true si cualquier operando es true
let vacaciones = true, diaDescanso = false;

if (vacaciones || diaDescanso) {
    console.log("puede asistir");
}
else{
    console.log("no puede asistir")
}

//operador terniario
let resultado = (3>2) ? "verdadero" : 0 ;
console.log(resultado);

let numero = 9;
resultado = (numero % 2 == 0) ? "numero par" : "numero impar";
console.log(resultado);

