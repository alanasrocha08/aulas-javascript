# aulas-javascript

Introdução ao JavaScript para uso básico

## Sobre a linguagem 
- JavaScript **NÃO** é Java !
- JavaScript -JS- EcmaScript
- É uma linguagem voltada principalmente ao front-end,mas também pode ser usada como o Node.Js po exemplo.
- Até mesmo no nicho de Apps Mobile, o JS também pode ser usado (React, Next.JS, React Native, etc.)

## Onde usar o JS no Front-End?

-Funconalidades de menu respomsivo
- Galeria de fotos
- Carousel/Slider de conteúdo
- Recursos avançados de formulário (Validação, integração com API)
- Interações avançadas (Manipulação de mouse, teclado, gastos, toques, etc.)

## Como implementar?

### Interna 

Programação feita dentro da própria página HTML usando a tg 'script', principalmente quando são scripts mais simple ou pequenos.

### Externa

Programação feita dentro de arquivo JavaScript exclusivos (possuem a extensão **.js**), usada principalmente quando queremos reutilizar scripts entre páginas HTML também é feita usando a tag 'script'. É a forma mais recomendada.

**Obs.:** normalmente a programação feita (ou ligada) **NO FINAL** da página HTML, portanto, pouco antes do fevhamento '</body>'



---

## Sobre Arrays

Arrays são estruturas de dados **indexados**, também conhecidos comos **vetores** ou **matrizes**.

Na prática, um array é uma lista de dados sequenciais, e cada dado é armazenado em uma posição/índice do arry.

**Obs.:** a contagem de elementos do array **sempre inicia em zero**

---

## Sobre Objetos

Objetos também são estrutura de dados só que **não-indexados** ou seja, o acesso dos dados é feito de forma direferente do que vimos nos arrays. No objeto, nós acessamos através de **propriedades** e **valores** declarados dentro do objeto.

Normalmente, o objeto é programado de acordo com algum contexto relacionado ao mundo real.

---

## Sobre Condicionais 

Sãso estruturas/comandos que permitem analisar uma ou mais condições dentro de aplicação.

De acordo com o resultado desta análise, podendo ser **verdadeira/true** ou **falsa/false**, a aplicação poderá fazer coisas diferentes.

### Operadores opcionais 
Ao trabalhar com condicionais, é comum utilizar operações relacionadas para comparação dentro das condições. Os operadores mais comuns são:

- Maior que         >
- Menor que         <
- Maior ou igual    >=
- Menor ou igual    <=
- Igualdade         ==
- Doferença         !=

---

## Sobre Comandos de repetição

São estruturas/comandos que permitem a execução repetidas vezes de uma ou mais ações/comandos/operções. Também conhecidos com **loops** ou **laços de repetição**

A quatidade de vezes que o loop será executado dependerá de alguma lógica ou condição definida pelo programador ou pelo sistema/aplicação. Também é comum que para que o loop pare de executar, seja definida uma variável de controle de repetoção. 

---

## Sobre DOM

Funções de acesso e manipulação do DOM 

- querySelector() é uma função para selecionar um ÚNICO elemento na página (DOM).

- querySelectorall () é uma função para selecionar vários elementos na página (DOM).

Nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no CSS.