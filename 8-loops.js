console.log(`\n Trabalhando com listas`);
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 1;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo"; 

console.log("\n Destino possíveis:");
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

let contador = 0; 
let destinoExiste = false
while(contador < 3){
    if (listaDestinos[contador] == destino){
       destinoExiste = true; 
     break;
    }
  contador += 1; 
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
  console.log("Boa Viagem!!")
}else{
  console.log("Desculpe tivemos um erro!")
}

for(let cont = 0  ; cont  < 3  ;  cont  ++){
   if(listaDestinos[contador] == destino){
   destinoExiste = true;
  }


}