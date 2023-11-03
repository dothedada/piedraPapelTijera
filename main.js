const contenedor = document.getElementById('contenedor')
const botonera = document.querySelectorAll('#seleccion button')
const conteo = document.getElementById('conteo')
const contadorVictorias = document.getElementById('victorias')
const contadorEmpates = document.getElementById('empates')
const contadorDerrotas = document.getElementById('derrotas')

let resultadoRonda = ''
let mensajeRonda = ''
let conteoVictorias = 0
let conteoEmpates = 0
let conteoDerrotas = 0

const elementos = ['piedra', 'tijera', 'papel']
const seleccionPrograma = () => elementos[Math.floor(Math.random()*3)]

function realizarPartida (jugador, programa) {
    if (jugador === programa) {
        resultadoRonda = 'Empate'
        mensajeRonda = 'Nada que decir'
        conteoEmpates++
        contadorEmpates.textContent = `${conteoEmpates} Empates`

        return
    }
    if (jugador === 'piedra' && programa === 'tijera' ||
        jugador === 'tijera' && programa === 'papel' ||
        jugador === 'papel' && programa ==='piedra') {
        resultadoRonda = '¡Ganaste!'
        mensajeRonda = `${jugador} vence ${programa}`
        conteoVictorias++
        contadorVictorias.textContent = `${conteoVictorias} Victorias`

        return
    }
    resultadoRonda = 'Perdiste :/'
    mensajeRonda = `${programa} vence ${jugador}`
    conteoDerrotas++
    contadorDerrotas.textContent = `${conteoDerrotas} Derrotas`

    return
}

function crearHistorial() {
    const detalleResultado = document.createElement('div')
    detalleResultado.classList.add('resultados')
    const textoInicial = document.createElement('p')
    textoInicial.textContent = resultadoRonda
    const elementoUsuario = document.createElement('span')
    elementoUsuario.classList.add('material-symbols-sharp')
    elementoUsuario.classList.add('resultado')
    // arreglar el item que carga
    elementoUsuario.textContent = 'receipt_long'
    const versus = document.createElement('span')
    versus.textContent = 'Vs'
    const elementoPrograma = document.createElement('span')
    elementoPrograma.classList.add('material-symbols-sharp')
    elementoPrograma.classList.add('resultado')
    // arreglar el item que carga
    elementoPrograma.textContent = 'diamond'
    const conclusion = document.createElement('p')
    conclusion.textContent = mensajeRonda

    detalleResultado.appendChild(textoInicial)
    detalleResultado.appendChild(elementoUsuario)
    detalleResultado.appendChild(versus)
    detalleResultado.appendChild(elementoPrograma)
    detalleResultado.appendChild(conclusion)


    contenedor.insertBefore(detalleResultado,conteo.nextElementSibling)

}

for(const boton of botonera) {
    boton.addEventListener('click', () => {
        const jugador = boton.getAttribute('data-value')
        const programa = seleccionPrograma()
        boton.firstElementChild.addEventListener('transitionend', () => {
            boton.firstElementChild.classList.remove('botonRotacion')
        })
        boton.firstElementChild.classList.add('botonRotacion')
        realizarPartida(jugador, programa)
        crearHistorial()
    })
}

