/*Comando condicionais mais comuns:

if -> SE
else -> SENÃO */

//Exemplo 1: condicinal simples
let numero = 5;
if( numero > 10 ){
    console.log(numero);
}

//Exemplo 2: condicional composta
let aluno = "Klaibert";
let idade = 18;

/*Lógica: verificar se o aluno é menor de idade ou maior de idade*/
if( idade < 18){
    console.log("É menor de idade");
} 
else {
    console.log("É maior de idade");
}

console.log("---")

/*Exercício

1) Crie duas variáveis conforme a seguir :
Nota 1 (contendo um valor de 0 a 10)
Nota 2 (contendo outro valor de 0 a 10)*/
let nota1 = 4;
let nota2 = 8;

/*2) Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. DICA: você deve SOMAS as duas notas e depois dividir por 2.*/
let media = (nota1 + nota2)/2;

/*3) Programe uma condicional que verifique o valor da média calculada. Se a média for maior/ iguial a 7, mostre "APROVADO". Caso contrário, mostre "REPROVADO".*/
if(media >= 7){
    console.log("APROVADO")
} else {
    console.log("REPROVADO")
};

/* ShortHaand if/else (if/else "curto/abreviado") usando operador ternário ?:*/

let situacao = media >= 7 ? "aprovado" : "reprovado";

console.log(situacao);








