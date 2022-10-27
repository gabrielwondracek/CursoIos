//Funções
function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}

let x = addNums(4, 5);
console.log(x);

let z = myFunc(4, 5);
console.log(z);

function myFunc(num1, num2) {
    return num1 * num2;
}

//Arrow functions
console.clear();
const ola = () => {
    return 'Bom dia Arrow Function!';
};

console.log(ola); //retorna o objeto da função
console.log(ola()); //Executa a função e imprime a string no return

console.clear();
const addNums2 = (num1 = 1, num2 = 1) => {
    return num1 * num2;
};

let multiplica = addNums2(7, 8);
console.log(multiplica);

//EVENTOSSSS
console.clear();
const boasVindas = () => {
    alert('Bem vindo a minha página!');
    console.log('Bem vindo a minha página!');
};

const eventClique = () => {
    console.log('Tu clicou no botão >:(');
};

const mouseEmCima = () => {
    console.log("o mouse está em cima!!! '0'")
}