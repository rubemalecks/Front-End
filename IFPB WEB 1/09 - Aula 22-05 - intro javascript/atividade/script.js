let preco
preco = 0.18
console.log("Panificadora - Pão de Ontem \nTabela de Preços \n");

for (let i=1; i <= 50; i++) {
    valor = preco*i
    console.log(i+" - "+ "R$ "+ valor.toFixed(2))
}

