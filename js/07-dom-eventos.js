/* Funções de acesso e manipulação do DOM 

- querySelector() é uma função para selecionar um ÚNICO elemento na página (DOM).

- querySelectorall () é uma função para selecionar vários elementos na página (DOM).

Nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no CSS.*/

/*Exemplos*/
const titulo = document.querySelector("h1");
const textoDom = document.querySelector(".texto-dom");
const subtitulos = document.querySelectorAll("h2");
const varios = document.querySelectorAll("p,img,button")

/*Modificando elementos do DOM*/
titulo.textContent = "Olá JavaScript!";
textoDom.innerHTML = "<i> O Marcio será resprovado!<i>";

/*Selecionar todaos os links da lista da lista de rferências e colocar neles o atributo target valendo _blank.*/
const links = document.querySelectorAll(".lista-de-referencias a");
console.log(links);

// links[0].setAttribute("target", "_blank");

for (const link of links) {
    /*Versão 1 (moderna, vale para qualquer atributo)*/
    link.setAttribute("target", "_blank");

    /*versão 2 (usando atributo via propriedade) mais antiga, vale para atributos nativos no HTML.*/
    // link.target = "_blank";
  }

  /* Manipulando Evendos*/ 
  const ex1 = document.querySelector ("#exemplo01");

  /*Poderíamos usar a função getElementById em vez do querySelector. A diferença é que ela só funciona para seleção através do ID. Obs: ao usa-la NÃO COLOQUE #.*/
  //const ex1 = document.getElementById ("exemplo01")
  const msg = document.querySelector("#mensagem");

  const pagina = document.querySelector ("body");

/*Função Ouvinte de Evento (Event Listener)
aplicando ao elemento ALVO do evento desejado ("click") e uma função para exercutar ações a partir do eventos. Obs: esta fincção, é considerada do tipo "anônima" e é conehcida como "callback".*/
  ex1.addEventListener("click", function(){
    /*Acessamos o parágrafo vazio e colocamos um conteúdo dentro dele*/
    msg.innerHTML = "Olá 🌍!";

    /*Modificar a página alterando a fonte (CSS via JS)*/
    pagina.style.fontFamily = "Verdana";
});

/*Ouvinte de evento para voltar ao normal (sem texto no parágrafo e com fonte padrão na página. O evento ocorrerá ao clicar DUAS vezes no parágrafo da mensagem.*/
msg.addEventListener("dbclick", function(){
  msg.innerHTML = ""; //removendo o conteúdo do parágrafo
  pagina.style.fontFamily = "initial"; //voltando para a fonte padrão
});
 
/*Exemplo 02: modo noturno*/
const botaoAtivar = document.querySelector("#ativar");
botaoAtivar.addEventListener("click", function(){
  /*Usamos o toggles do classList para alterar a aplicação/remoção da classe "noturno". Na prática, vira um /liga/desliga.*/
  pagina.classList.toggle("noturno");

  /*DESAFIO!! Trocar o texto do botão. Se a página estiver com a classe "noturno" aplicada, o botão deve nostrar a palavra "Desativar". Caso contrário, deve mostrar a paravra "Ativar". Use if/else.*/

    if (pagina.classList.contains("noturno")) {
        botaoAtivar.textContent = "Desativar";
    } else {
        botaoAtivar.textContent = "Ativar";
    }
});

/*Sbre o duplo sinal de igual*/
let a = "10"; //TEXTO
let b = 10; //NÚMERO
let resultado = a === b;
console.log (resultado);

// == compara VALORES
// === compara VALORES E TIPO DE DADO




 







