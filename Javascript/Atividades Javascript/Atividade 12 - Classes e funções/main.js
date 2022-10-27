// Classes
class car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

// Instanciando objetos à classe
let myCar1 = new car('Brasília', 1990);
let myCar2 = new car('Opala', 1987);

//Imprimindo valores
console.log(myCar1.name);
console.log(myCar1.year);

console.log(myCar2.name);
console.log(myCar2.year);

// Declarar nova classe com métodos 
console.clear();
class newCar {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    yearCar(year) {
        return year - this.year;
    }
}

//Buscando o ano atual automaticamente
let dateToday = new Date();
let year = dateToday.getFullYear();
//console.log(dateToday);

//Instanciando objeto a classe
let myNewCar = new newCar('Renegade', 2015);

console.log(myNewCar.yearCar(year));

//Mais um exemplo de classe
console.clear();
class people {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

//Instanciando objeto
const people1 = new people('Maria', 'Kolumbesky', '2004-05-08');
const people2 = new people('Gabriel', 'Wondracek', '2005-08-12');

console.log(people1);
console.log(people2.dob.getFullYear());
console.log(people2.getBirthYear());
console.log(people1.getFullName());

//Lexical this em uma função 
console.clear();
//Constructor de função - Lexical this
function pessoaFunc(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}

// Instanciando os objetos
const people3 = new pessoaFunc('Jônatas', 'Rocha', '2005-12-04');
const people4 = new pessoaFunc('Cauê', 'Foyth', '2006-02-22');

console.log(people3);
console.log(people4.dob.getFullYear());

// Adicionando protótipos
pessoaFunc.prototype.getBirthDayMonth = function () {
    let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
    return dados;
};

pessoaFunc.prototype.getFirstName = function () {
    return `${this.firstName}`;
};

console.clear();
console.log(people3.getBirthDayMonth());
console.log(people4.getFirstName());