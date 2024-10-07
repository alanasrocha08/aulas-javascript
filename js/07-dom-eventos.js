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
  const ex1 = document.querySelector ("#exemplo1");
  const msg = document.querySelector("#mensagem");
  ex1.addEventListener("click", function(){
    msg.innerHTML = "Olá😜!"
  });







