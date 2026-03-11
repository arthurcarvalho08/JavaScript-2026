const readline = require('readline-sync')

let = nomeHeroi = readline.question("Digite o nome do seu herói: ")
let = pontosXP = readline.question("Digite a quantidade de XXP o seu herói: ")

if (pontosXP < 100){
    categoria = "Iniciante"
}

else if (pontosXP < 500){
    categoria = "Guerreiro"    
}

else if (pontosXP < 1000){
    categoria = "Mestre"
}

else{
    categoria = "Lenda viva"
}

console.log(`O Herói ${nomeHeroi} possui ${pontosXP} de experiência e seu rank atual é: ${categoria}. `);