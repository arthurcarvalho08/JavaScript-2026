const readline = require('readline-sync');
let nome = readline.question("Qual é seu nome? ")
let idade = readline.questionInt("Qual é sua idade? ")
let temCupom = true;

let PRECO_CHEIO = 45;

    if (idade >= 60){ 
        console.log (`Seu cupom te dá 50% de desconto e seu ingresso custou ${PRECO_CHEIO / 2}`)
         }
    else if (idade < 18 && temCupom == true){ 
        console.log (`Seu cupom te dá 20% de desconto e seu ingresso custou ${PRECO_CHEIO * 0.8}`)
         }
    else { 
    console.log("Você não validou seu cupom, seu valor é de R$45,00.")
         }