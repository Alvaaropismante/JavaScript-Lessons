let miNumero = "22";

//console.log(miNumero);

let edad = Number(miNumero); //transformar string a numero
console.log(edad);

if (edad >= 18) {
    console.log("persona puede votar")
}
else{
    console.log("persona no puede votar")
}

//usando operador terniaro
let voto = ( edad >= 18 ) ? "si puede votar":"no puede votar";
console.log(voto);