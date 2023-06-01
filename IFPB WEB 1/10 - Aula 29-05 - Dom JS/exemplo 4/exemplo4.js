

function calculaResultado() {
    preco = document.querySelector('#ipreco').value
    quant = document.querySelector('#iquant').value
    total = parseFloat(preco) * parseInt(quant)
    document.querySelector('#itot').value = total.toFixed(2)
}

function limparCampos() {
    document.querySelector('#iprod').value = ''
    document.querySelector('#ipreco').value = ''
    document.querySelector('#iquant').value = ''
}