let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
let nota4 = 6;

const nomeAluno = "Mei Kilu";

let media = (nota1 + nota2 + nota3 + nota4) / 4

if(media >= 7){
    console.log("O aluno " + nomeAluno +  " está aprovado.")
} if(media >= 5 && media < 7){
    console.log("O aluno " + nomeAluno + " está de se liga.")
}
if(media < 5){
    console.log("O aluno " + nomeAluno + " está reprovado.")
}

console.log("O aluno " + nomeAluno + " tem a média: " + media)
