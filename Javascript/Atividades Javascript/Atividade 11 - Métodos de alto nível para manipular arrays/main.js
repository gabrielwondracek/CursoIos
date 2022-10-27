//Método forEach()
const frutonas = ['maçã', 'laranja', 'uva'];
frutonas.forEach(nossafuncao);

function nossafuncao(item, index) {
    console.log(`Ìndice: ${index}`);
    console.log(`Elemento: ${item}`);
}

//Método forEach() com arrow function
console.clear();
const frutonas1 = ['maçã', 'laranja', 'uva'];
frutonas1.forEach((index, item) => {
console.log(`Índice: ${index}`);
console.log(`Elemento: ${item}`);
});

//forEach() com array de objetos
console.clear();
const tarefonas = [
    {
    id: 1,
    texto: 'olha a pedra',
    taCompleta: true,
    },
    {
        id: 2,
        texto: 'AAAAAAAAAAA',
        taCompleta: true,
    },
    {
        id: 3,
        texto: 'Fim do curso',
        taCompleta: false,
    },
];

tarefonas.forEach((teste) => console.log(teste.texto));

//Método map()
console.clear();
const nums = [9, 16, 25, 72];
const newArray = nums.map(Math.sqrt); //sqrt é a raiz quadrada
console.log('Números:');
console.log(nums);
console.log('Novo Array:');
console.log(newArray);

console.clear();
const mapTexto = tarefonas.map((valor) => {
    return valor.texto;
});
console.log(mapTexto);

//Método filter()
console.clear();
const year = [32, 44, 55, 67, 12, 45, 19, 22];
let filtroYear = year.filter((year) => {
    return year >= 38;
});
console.log(filtroYear);

console.clear();
const filtroCompleted = tarefonas.filter((item) => {
    return item.isCompleted === true;
});

console.log(filtroCompleted);

//Método find()
console.clear();
const nossoArray = [
    { nome: 'Iphone 7', quantidade: 3 },
    { nome: 'Xiaomi', quantidade: 1},
    { nome: 'samsung', quantidade: 5},
];

console.log(
    nossoArray.find((celulares) => {
        return celulares.nome === 'Xiaomi';
    })
);