//Objetos
let pessoa = {
    primeiroNome: 'Gabriel',
    ultimoNome: 'Wondracek',
    Idade: 17,
    corDosOlhos: 'Azul esverdeado',
    hobbies: ['jogos', 'música', 'culinária'],
    endereco: {
        rua: 'alguma ai',
        numero: '?',
        cidade: 'sim',
        estado: 'Bahia',
    },
};
console.log(pessoa);

//Atribuição via desestruração
console.clear();
const {
    primeiroNome,
    ultimoNome,
    endereco: { cidade },
} = pessoa
console.log(`${primeiroNome} ${ultimoNome} é de ${cidade}`);

//Atribuição via desestruração em arrays
console.clear();
const array = [1, 2, 3, 4, 5];
let [valor01, valor02, ...resto] = array;
console.log(valor01);
console.log(valor02);
console.log(resto);

//Array de objetos
console.clear();
const tarefinhas = [
{
    id: 1,
    texto: 'Fazer a tarefa',
    taCompleta: true,
},
{
    id: 2,
    texto: 'Dormir',
    taCompleta: true,
},
{
    id: 3,
    texto: 'Consulta',
    taCompleta: false,
},
];
console.log(tarefinhas);
console.log(tarefinhas[1].texto);

//Transformar um array em JSON
console.log(JSON.stringify(tarefinhas));

//JSON
const tarefinhas_JSON =
'[{"id":1,"texto":"Fazer a tarefa","taCompleta":true},{ "id": 2,"texto": "Dormir", "taCompleta": true},{ "id": 3, "texto": "Consulta", "taCompleta": false}]';
const objeto = JSON.parse(tarefinhas_JSON);
console.clear();
console.log(objeto);