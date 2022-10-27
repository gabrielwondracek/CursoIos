//estrutura condicional simples
//Igual duplo
const a = 10;
if (a == 10) {
    console.log("a é 10");
}

const b = '10';
if (b == 10){
    console.log("b é 10");
}

//Triplo igual -verifica o tipo
//console.clear();
const c = 10;
if (c === 10) {
    console.log('c é 10');
}

const d = '10';
if (d === 10)  console.log('d é 10');

console.log('Estou fora do if que compara string');

//Estrutura condicional composta
const e = '10';
if (e === 10) {
    console.log('e é o numeral 10');
}
    else {
    console.log(`resultado da condição: ${e === 10}`);
    console.log('e não é o numeral 10');
    }

//Multiplas condições
console.clear()
const f = 4;
const g = 11;

if (f > 5 || g > 9) {
    console.log(`Condição é ${f > 5 || g > 9}`);
    console.log('f é maior do que 5 ou g é maior que 9');
}
    else {
    console.log('f não é maior que 5 e g não é maior que 9');
    }

if (f > 5 && g > 9) {
    console.log('f é maior que 5 e g é maior que 9');
}
    else {
    console.log(`Condição é ${f > 5 && g > 9}`);
    console.log('f não é maior que 5 ou g não é maior que 10');
    }

//Desvios encadeados
/*console.clear()
const num = 'Ola';

if (num % 2 = 0 && !isNaN(num)) {
    console.log('Número par!');
}
    else if (num % 2 != 0 && !isNaN(num)){
        console.log('Número ímpar');
    }

    else {
        console.log('Não é um número!');
    }*/

//Mudar a variável num para 10
console.clear()
const num = 10;

if (num % 2 == 0 && !isNaN(num)) {
    console.log('Número par!');
}
    else if (num % 2 != 0 && !isNaN(num)){
        console.log('Número ímpar');
    }

    else {
        console.log('Não é um número!');
    }

//Operador ternário - exemplo 1
console.clear()
let resultado = 3 > 4 ? "Sim" : "Não";
console.log(resultado);

//Operador ternário - exemplo 2
console.clear()
let result = Math.PI < 4 ? console.log("Sim") : console.log("Não");