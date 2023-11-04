// llamado de los elementos de la interfase
const contenedor = document.getElementById('contenedor')
const interfase = document.getElementById('seleccion')
const botonera = document.querySelectorAll('#seleccion button')
const conteo = document.getElementById('conteo')
const contadorVictorias = document.getElementById('victorias')
const contadorEmpates = document.getElementById('empates')
const contadorDerrotas = document.getElementById('derrotas')
const botonReinicio = document.getElementById('reiniciar')

// inicialización de las varibales del juego y mensajes
let resultadoRonda = ''
let mensajeRonda = ''
let conteoVictorias = 0
let conteoEmpates = 0
let conteoDerrotas = 0
let itemJugador = ''
let itemPrograma = ''
let totalPartidas = 0

// Selección del programa
const elementos = ['piedra', 'tijera', 'papel']
const seleccionPrograma = () => elementos[Math.floor(Math.random()*3)]

// Asignación de los íconos del historial a partir de la selección
function asignarIcono(seleccion) {
    if(seleccion === 'piedra') return 'mdi:diamond-stone'
    if(seleccion === 'tijera') return 'mdi:content-cut'
    if(seleccion === 'papel') return 'mdi:paper-roll-outline'
}

// Realización de la ronda
function realizarPartida (jugador, programa) {
    itemJugador = asignarIcono(jugador)
    itemPrograma = asignarIcono(programa)
    totalPartidas++

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
        resultadoRonda = '¡Ganaste la ronda!'
        mensajeRonda = `${jugador} vence ${programa}`
        conteoVictorias++
        contadorVictorias.textContent = `${conteoVictorias} Victorias`
        return
    }

    resultadoRonda = 'Perdiste esta vez :/'
    mensajeRonda = `${programa} vence ${jugador}`
    conteoDerrotas++
    contadorDerrotas.textContent = `${conteoDerrotas} Derrotas`
}

// Creación del div que contiene el historial
function crearHistorial() {
    const detalleResultado = document.createElement('div')
    detalleResultado.classList.add('resultados')
    const textoInicial = document.createElement('p')
    textoInicial.textContent = resultadoRonda
    const elementoUsuario = document.createElement('span')
    elementoUsuario.classList.add('iconify', 'resultado')
    elementoUsuario.setAttribute('data-icon', itemJugador)
    const versus = document.createElement('span')
    versus.textContent = 'Vs'
    const elementoPrograma = document.createElement('span')
    elementoPrograma.classList.add('iconify', 'resultado')
    elementoPrograma.classList.add('resultado')
    elementoPrograma.setAttribute('data-icon', itemPrograma)
    const conclusion = document.createElement('p')
    conclusion.textContent = mensajeRonda

    detalleResultado.appendChild(textoInicial)
    detalleResultado.appendChild(elementoUsuario)
    detalleResultado.appendChild(versus)
    detalleResultado.appendChild(elementoPrograma)
    detalleResultado.appendChild(conclusion)
    contenedor.insertBefore(detalleResultado,conteo.nextElementSibling)

    if(totalPartidas <= 1) return
    setTimeout(() => {
        detalleResultado.nextElementSibling.classList.add('anterior')
    }, 300)
}

// Reinicio de partida
function reinicio() {
    if (totalPartidas < 1) return

    for (let i = 0; i < totalPartidas; i++){
        contenedor.removeChild(contenedor.lastElementChild)
    }

    conteoEmpates = 0
    conteoVictorias = 0
    conteoDerrotas = 0
    totalPartidas = 0
    contadorEmpates.textContent = `${conteoEmpates} Empates`
    contadorVictorias.textContent = `${conteoVictorias} Victorias`
    contadorDerrotas.textContent = `${conteoDerrotas} Derrotas`
}

function finalizarJuego(){
    if(conteoVictorias === 5 || conteoDerrotas === 5) {
        interfase.classList.add('hidden')

        const resultado = () => {
            if(conteoVictorias > conteoDerrotas) return '¡¡¡GANASTE ESTA PARTIDA!!!'
            return 'Perdiste, será en otra oportunidad.'
        }

        const fondoModal = document.createElement('div')
        fondoModal.classList.add('finalPartida')
        const recuadro = document.createElement('div')
        recuadro.classList.add('recuadro')
        const texto1 = document.createElement('p')
        texto1.classList.add('recuadro__texto1')
        texto1.textContent = `luego de ${totalPartidas} rondas...`
        const texto2 = document.createElement('p')
        texto2.classList.add('recuadro__texto2')
        texto2.textContent = resultado()
        const botonera = document.createElement('div')
        const nuevaPartida = document.createElement('button')
        nuevaPartida.classList.add('botonFinal')
        nuevaPartida.textContent = 'Jugar de nuevo'
        nuevaPartida.addEventListener('click', () => {
            reinicio()
            interfase.classList.remove('hidden')
            document.body.removeChild(fondoModal)
        })
        const cerrar = document.createElement('button')
        cerrar.classList.add('botonFinal')
        cerrar.textContent = 'Cerrar y ver historial'
        cerrar.addEventListener('click', () => {
            document.body.removeChild(fondoModal)
        })

        botonera.appendChild(nuevaPartida)
        botonera.appendChild(cerrar)
        recuadro.appendChild(texto1)
        recuadro.appendChild(texto2)
        recuadro.appendChild(botonera)
        fondoModal.appendChild(recuadro)
        document.body.appendChild(fondoModal)
    } 
}

// Funcionamiento de los botones de juego
for(const boton of botonera) {
    boton.addEventListener('click', () => {
        const jugador = boton.getAttribute('data-value')
        const programa = seleccionPrograma()

        realizarPartida(jugador, programa)
        crearHistorial()
        finalizarJuego()
    })
}

// Boton de reseteo de la partida
botonReinicio.addEventListener('click', () => {
    reinicio()
    if(interfase.classList.contains('hidden')) interfase.classList.remove('hidden')
})
