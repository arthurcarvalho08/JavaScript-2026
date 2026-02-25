const readline = require('readline-sync');

console.log("Jogo da adivinhação, chute um número de 1 a 10: ");

const numeroSecreto = Math.floor(Math.random()*10 + 1);

let palpite = readline.questionInt("Qual é seu palpite? ")
let tentativas = 1;

while (palpite != numeroSecreto){
    if (palpite < numeroSecreto){
        console.log("o número secreto é maior do que seu chute!"); 
     }
    else {
        console.log("O número secreto é menor do que seu chute!")
     }

    palpite = readline.questionInt("Tenta de novo.");
    tentativas ++;
        }
    console.log(`Parabéns, você acertou o ${numeroSecreto} em ${tentativas} chutes.`)

