//Exemplo 1: objeto com dados de um pessoa 
const pessoa = {
    nome: "Alana", 
    idade: 16,
    cidade: "São Paulo",
    estado: "SP"
};

//Exibindo a estrutura do objeto
console.log(pessoa);

//Acessando determinadas propriedades
console.log(`A ${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade} no estado de ${pessoa.estado}`);

//Exemplo 2: objeto com array
const livro = {
    titulo: "Harry potter",
    autor: "J.K. Rowling",
    volumes: [
        "Harry potter e a pedra filosofal",
        "Harry Potter e a câmara secreta",
        "Harry Potter e o prisioneiro de Askaban",
        "Harry Potter e o Cálice de fogo",
        "Harry Potter e a Ordem da Fenix",
        "Harry Potter e o Enigma do Príncipe",
        "Harry Potter e as Relíquias da Morte"
    ]
};

//Exibindo a estrutura
console.log(livro);

//Acesso usando nome da propriedade e índice do array desta propriedade
console.log(livro.volumes[1])

//Exemplo 3: array de objetos
const livros =[
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        titulo: "Senhor do anéis",
        autor: "J.R.R. Tolkien"
    },
    {
        titulo: "Ghost Rider",
        autor: "Nail Peart"
    }
];

//Acessando através do índice a prop.
console.log(livros[1].autor)

/*Exercício:

1) Crie um objeto chamado "aluno" contendo os seguintes dados:
1- Nome Completo
2- Data de Nascimento
3- Lista de telefones (fixo e celular)
4- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente): 
1. rua
2. número
3. bairro

2) Mostre no console o nome do aluno, o telefone celular e o bairro em que mora.
*/ 

const aluno = {
    nome_completo: "Alana Silva Rocha",
    nascimento: "13-02-2008",
    telefones: [
      "(11) 2682-0110",
      "(11) 94987-8129"
    ],
    endereco: {
      rua: "Ilha da Figueira",
      numero: "227",
      bairro: "Vila Paulistânia"
    }
  };

console.log(`Nome: ${aluno.nome_completo}`)
console.log(`Telefone: ${aluno.telefones[1]}`)
console.log(`Bairro: ${aluno.endereco.bairro}`)
  
  