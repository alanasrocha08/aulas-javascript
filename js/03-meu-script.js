//Declarando um array
let alunos = ["Alana", "Júlia", "Nathalya", "Clara"];

//Exibindo a estrutura do array
console.log(alunos);

//Acessando um elemento específico do array
console.log(`${alunos[2]} é o vocalista da banda Slayer!`)

/*Mini exercício

1)Criar um novo array contendo o nome de 7 coisas que você gosta (artistas, música, livro, comida...)

2) Em seguida, mostre no console uma frase personalizada indicando o nome do segundo, quinto e sétimo elemento do array. Use concatenação OU tempalnte string.*/ 

let musica = ["Dizzy", "Slide", "Broadway", "January Friend", "Iris", "Black Balloon", "Amigone", "Full Forever"];

console.log(musica);

console.log(`Eu adoro a banda "The Goo Goo Dolls" minhas músicas favoritas são ${musica[2]} e ${musica[5]}, ${musica[7]}`)

/* Array como matriz de 2 dimesões*/
const tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js","SQL","Express", ["Apache", "IIS"]]
];

// console.log(tecnologias);

console.log(tecnologias[2][4][0]);
console.log(tecnologias[0][2]); //JavaScript
console.log(tecnologias[0][1]); //Figma
console.log(tecnologias[2][3]); //Express
console.log(tecnologias[0][0]); //HTML5


