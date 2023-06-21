//const dataEvento = new Date('2023-06-23 19:30:00')


function atualizaTempo(tempo) { 
    tempoSegundos = tempo % 60
    tempoDias = Math.floor(tempo / (60 * 60 * 24))
    tempoHoras = Math.floor(tempo % (60 * 60 * 24) / 3600)
    tempoMinutos = Math.floor((tempo % (60*60)) / 60)
    
    
    
    segundos = document.getElementById('segundos')
    segundos.textContent = tempoSegundos
    segundos.textContent = `0${tempoSegundos}`.slice(-2)

    minutos = document.getElementById('minutos')
    minutos.textContent = tempoMinutos
    
    horas = document.getElementById('horas')
    horas.textContent = tempoHoras
    
    dias = document.getElementById('dias')
    dias.textContent = tempoDias
}

function contar() {
    if (tempo < 1) {
        clearInterval(intervalo)
    }
    atualizaTempo(tempo)
    tempo--

}



const dataEvento = new Date('2023-06-20 21:19:59')
dataHoje = Date.now()
difData = Math.floor((dataEvento - dataHoje) / 1000)
tempo = difData
atualizaTempo(tempo)

intervalo = setInterval(contar, 1000)