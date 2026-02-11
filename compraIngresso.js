let saldoConta= 1000;
precoIngresso = 900;

console.log("Tentando comprar o ingresso...")
if(saldoConta >= precoIngresso){
    let troco = saldoConta - precoIngresso;
    console.log("Compra realizada, bom show!");
    console.log("Seu troco é R$: " + troco)
} else {
    console.log("Saldo insuficiente. Faltam R$: " + (precoIngresso - saldoConta));
}