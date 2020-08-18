console.log("CÁLCULO DA MÉDIA")

const instrucao = ('Digite suas notas abaixo ↓')
console.log(instrucao)

const readlineSync = require('readline-sync');

const notaUm = parseFloat(readlineSync.question('Nota 1: '));
const notaDois = parseFloat(readlineSync.question('Nota 2: '));
const notaTres = parseFloat(readlineSync.question('Nota 3: '));
const notaQuatro = parseFloat(readlineSync.question('Nota 4: '));
const notaCinco = parseFloat(readlineSync.question('Nota 5: '));

const media = (notaUm+notaDois+notaTres+notaQuatro+notaCinco)/5;

if(media >= 7)
    console.log(`Parabéns! Sua média foi ${media.toFixed(2)} e você está aprovada!`);
else if ( media < 5)
    console.log(`Infelizmente, sua média foi ${media.toFixed(2)} e você está reprovada. Venha aos nossos plantões e poderemos te ajudar a se preparar para o próximo ano!`);
else
    console.log(`Sua média foi ${media.toFixed(2)} e você está de recuperação. Venha aos nossos plantões e poderemos te ajudar!`);