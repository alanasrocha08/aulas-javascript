/* Principais comandos de repetição

- while -> ENQUANTO
- for -> PARA

São comandos de uso geral, existem em praticamente qualquer linguagem de programação*/

//Exemplo 1: while

let contador = 1;
while (contador <= 5) {
    console.log("Valor do contador é " + contador);
    contador++; // ++ é o operador de incremento 
}


console.log("---");

//Exemplo 2: for
for (let contador = 1; contador <= 10; contador++) {
    console.log("oiii " + contador + " vez!");
}
console.log("chegaaaa");

/*Nomenclatura para variáveis de controle 
Embora possamos dar qualquer nome (como contador por exemplo), geralmente são usadas as letras i, j ou k (ou outras letras se necessário).*/
for (let i = 1; i <= 3; i++) {
    console.log("valor de i é:" + i)
}

console.log("---");


/*loops exclusivos do JS para estruturas de dados*/

//for/of -> loop para arrays
const roupas = ["blusa", "Calça", "tênis", "Blusa", "bota", "luva", "saia"]

for (const roupa of roupas) {
    console.log(roupa);

}

/*console.log(roupas[0]);
console.log(roupas[1]);
console.log(roupas[2]);
console.log(roupas[3]);*/

console.log("---");


//usando o for tradicional

//Guardadndo o tamanho do array uma vez (fazendo cache do array)
let quantidade = roupas.length

for (let i = 0; i < roupas.length; i++) {
    console.log(roupas[i]);

}

console.log("---");


// for/in -> loop para objetos
const pessoa = {
    nome: "Alana Rocha",
    idade: "16",
    cidade: "São Paulo",
    estado: "SP",
    email: "alanasr02@gmail.com",
    time: "Corinthians"
};

for (const prop in pessoa) {
    //Mostra somente o nome da propriedade
    console.log(prop);

    //Mostra p valor da propriedade
    console.log(pessoa[prop]);
}

/*Exercícios
1) Faça um arrays chamado "clientes" contendo 3 objetos. Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2, 3) e uma propriedade "nome" (com os nomes dos clientes "Goku", "Naruto" e "Shiryu").

2) Faça em loop (qualquer um dos que vimeos ) e mostre no console os dados de cada clente conforme a seguir: 
- Cliente: Goku, id: 1
- Cliente: Naruto, id:2
- Cliente: Shiryu, id: 3 */

console.log("---");


let clientes = [
    { identificador: 1, nome: "Goku" },
    { identificador: 2, nome: "Naruto" },
    { identificador: 3, nome: "Shiryu" }
];

for (const cliente of clientes) {
    console.log(`- Cliente: ${cliente.nome}, id: ${cliente.identificador}`);
}
