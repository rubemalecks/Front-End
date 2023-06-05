function usarTemaEscuro() {
    document.body.style.backgroundColor = '#212529'
    document.body.style.color = '#f1f5f9'
    document.body.style.fontSize = '24px'
}

function usarTemaClaro() {
    document.body.style.backgroundColor = '#f1f5f9'
    document.body.style.color = '#212529'
    document.body.style.fontSize = '24px'
}

function trocaTema() {
    // document.body.style.backgroundColor = ''
    // document.body.style.color = ''
    // document.body.classList.toggle('escuro')
    if (document.body.classList.contains('claro')) {
        document.body.classList.remove("claro")
        document.body.classList.add('escuro')
    }
    else {
        document.body.classList.remove('escuro')
        document.body.classList.add('claro')

    //     document.body.classList.replace('escuro', 'claro')
        //
    }
}


function usarTemaMedio() {
    document.body.classList.toggle('medio')
}