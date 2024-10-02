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
    autor: "J. K. Rowling",
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