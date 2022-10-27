//Switch
const h = 11;
const cor = h > 10 ? 'vermelha' : 'azul';

switch (cor) {
    case 'vermelha':
        console.log('a cor é vermelha');
        break;
    case 'azul':
        console.log('a cor é azul');
        break;
    default:
        console.log('a cor não é vermelha nem azul');
        break;
}