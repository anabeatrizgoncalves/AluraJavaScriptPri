console.log(`Trabalhando com listas`);
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destino possíveis:");
console.log(listaDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDestinos.splice(1, 1);//removendo item 
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDestinos.splice(1, 1);
// } else {
//     console.log("Não é maior de idade não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDestinos.splice(1, 1);//removendo item 
}else{
    console.log("Não é maior de idade não posso vender");
}

console.log("Embarque: \n\n ");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDestinos);

// console.log(idadeComprador >  18);
// console.log(idadeComprador <  18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);