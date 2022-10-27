//Laços de arrays
const frutas = ['apples', 'oranges', 'pears', 10, true];
for (let j = 0; j < frutas.length; j++) console.log(`Nome: ${frutas[j]} \n`);

//Array de objetos e laços
console.clear();
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist app',
        isCompleted: false,
    },
];

//for overloop
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}