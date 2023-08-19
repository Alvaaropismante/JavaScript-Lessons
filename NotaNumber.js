let miNumero = "18x";

let edad = Number(miNumero);
console.log(edad);//Not a Number


if (isNaN(edad)) {
    console.log("no es un numero")
}
else{
    if (edad >= 18) {
        console.log("puede votar");
    }
    else{
        console.log("muy joven");
    }
}