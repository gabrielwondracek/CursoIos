//Concatenar Strings
let valor01 = 100;
const valor02 = 5;
console.log('A multiplicação de ' + valor01 +' por ' + valor02 + ' é ' + valor01 * valor02)
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`);

//Métodos de Strings
    console.clear()
const string01 = 'Instituto da Oportunidade Social'
//Acessando o primeiro caractere
console.log(string01.charAt(0));
console.log(string01[0]);
//Acessando o décimo primeiro caractere
console.log(string01.charAt(10))
console.log(string01[10]);

//Tamanho das strings
    console.clear()
let nome = 'Olá meu nome é Gabriel Henrique Wondracek';
console.log(nome.length);

//Maiusculo e Minúsculo
    console.clear()
const o = 'Olá Mundo!';
console.log(o.toUpperCase());
console.log(o.toLowerCase());

//Substring
    console.clear()
const teste = 'Animalesco';
console.log(teste.substring(1, 3));
console.log(teste.substring(2))

//Split
    console.clear()
const animal = "Os polvos são animais demasiadamente inteligentes";
const palavras = animal.split(' ');
console.log(palavras[3]);
//Saída esperada 'animais'
const chars = animal.split('');
console.log(chars[7]);
//Saída esperada 'o'
const animalCopy = animal.split();
console.log(animalCopy);
//Saída esperada: Array ['Os polvos são animais demasiadamente inteligentes']

//Substituir String
    console.clear();
let dizer = 'Venha para o céu!';
console.log(dizer);
let novoDizer = dizer.replace('céu', 'inferno');
console.log(novoDizer);

//Remover espaços
    console.clear();
let grandefraseuauprofessorjosleiteamo = '                      Olá professor Éder (esqueci o seu nome no momento dessa atividade foi mal)      ';
console.log(grandefraseuauprofessorjosleiteamo.trim());

//Métodos de busca em Strings
    console.clear()
let verdade = 'Sou um excelente aluno, sou f@da!';
console.log(verdade.indexOf('Sou'));
console.log(verdade.lastIndexOf('Sou'));

console.log(verdade.search('excelente'));

console.log(verdade.startsWith('S'));
console.log(verdade.startsWith('Sou'));
console.log(verdade.startsWith('a'));

console.log(verdade.endsWith('!'));
console.log(verdade.endsWith('f@da!'));
console.log(verdade.endsWith('aaaaaa'));
