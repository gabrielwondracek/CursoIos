// Método getElementById
let tit = document.getElementById('tit');
//Alterando o conteúdo
tit.innerHTML = 'OLÁ PROFESSOR!';
//Configurando o estilo CSS
tit.style.textAlign = 'center';
tit.style.backgroundColor = '#CCCCC9';
tit.style.borderBottom = 'solid 5px #000';
tit.style.margin = '30px';

// Método getElementByClassName
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[0]);
items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'yellow';
//Laço de repetição aplicado
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}

// Método getElementByTagName
let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.lenght; i++) {
    if (i % 2) li[i].style.backgroundColor = '#f4f4f4';
    else li[i].style.backgroundColor = '#fff';
} 

// Método getElementsByName
let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[0].textContent = 'Olá professor';
nome[0].style.backgroundColor = 'blue';
nome[1].textContent = 'Tudo certo?';
nome[1].style.backgroundColor = 'red';

//Remove elemento do DOM
let item2 = document.getElementById('item2');
item2.remove();

//Retornando elemento
let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling);

//Alterando o estilo da lista
let ul = document.getElementById('items');
ul.style.listStyle = 'none';
//Marcadores numéricos
ul.style.listStyle = 'decimal inside';