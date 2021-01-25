console.log(`Trabalhando com listas`); 
// const salvador = `Salvador` ; 
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDestinos.push(`Curitiba`); // adicionando na lista

console.log("Destino possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDestinos);

listaDestinos.splice(1,1);
console.log(listaDestinos);

console.log(listaDestinos[1], listaDestinos[0]); 