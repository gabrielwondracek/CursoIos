//Javascript e DOM
//Objeto documente
console.log(document);

//Acessar informações 
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

//Alterar o título
document.title = 123;
//Criar um elemento <h1>
let cabeca = document.createElement('H1');
cabeca.innerHTML = 'Olá alunos!';
document.body.appendChild(cabeca);
cabeca.style.borderBottom = 'solid 3px #000'