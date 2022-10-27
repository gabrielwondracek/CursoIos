//Arrays unidimensionais
//Podemos criar um array assim
const num1 = new Array(30, -1, 5, 3, 121);
//Ou podemos fazer
const num2 = [-2, 40, 16, 111, 33, 64];

console.log(num1);
console.log(num2);

//Acessando elementos diversos dos Arrays
console.log(`O primeiro elemento de num1: ${num1[0]}`);
console.log(`O primeiro elemento de num2: ${num2[0]}`);
console.log(`O terceiro elemento de num1: ${num1[2]}`);
console.log(`O quinto elemento de num2: ${num2[5]}`);

//Arrays bidimensionais
console.clear();
const matriz = [
    ['Banana', 'Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null, 'uva', -350],
];
//Acessando elementos diversos dos arrays 
console.log(`Acessa a primeira linha: ${matriz[0]}`);
console.log(`Acessa o segundo elemento: ${matriz[0][1]}`);

//Para alterar um valor do array
console.clear();
let moedas = ['Real', 'Dólar', 'Euro', 'Peso'];

console.log(`Antes: ${moedas}`);
moedas[3] = 'Yen';
console.log(`Depois: ${moedas}`);

let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log("Antes:", matriz1)

console.clear();
matriz1[0][2] = -10;
console.log("Depois", matriz1)

//Métodos em arrays
console.clear();
let numArray = [1, 2, 3, 4];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);

//join()
console.clear();
let teste1 = [0, 1, 2, 3, 4, 5];
let teste2 = teste1.join(' *** ');
console.log(teste2)
console.log(typeof teste2);

//Tamanho de Arrays
console.clear();
let array = [0, 1, 2, 3, 4];
console.log(array.length);

//Remover e inserir elementos
//pop()
console.clear();
const frutas1 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let x = frutas1.pop(); //X = MANGA
console.log(frutas1);
console.log(x);

//push()
console.clear();
const frutas4 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let o = frutas4.push('Kiwi'); 
console.log(frutas4);
console.log(o);

//shift()
console.clear();
const frutas99 = ['Banana', 'Laranja'];
let n = frutas99.shift();
console.log(frutas99);
console.log(n);

//unshift
console.clear();
const frutas100 = ['Banana', 'Laranja'];
let i = frutas100.unshift('kiwi');
console.log(frutas100);
console.log(w);

//delete
console.clear();
const frutasnumeroalto = ['Banana', 'Laranja', 'Maça', 'Manga'];
delete frutasnumeroalto[3];
console.log(frutasnumeroalto);

