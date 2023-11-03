function getComputerChoice() {
	const opcionesPosibles = ["Piedra", "Tijera", "Papel"]
	return opcionesPosibles[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
	let seleccionUsuario = playerSelection.toUpperCase()
	let seleccionComputador = computerSelection.toUpperCase()
	if (seleccionUsuario === seleccionComputador) {
		conteoEmpates++
		return `El computador también seleccionó ${seleccionComputador}, hay un empate en esta ronda`
	}
	if (seleccionUsuario === "PIEDRA" && seleccionComputador === "TIJERA" || 
		seleccionUsuario === "TIJERA" && seleccionComputador === "PAPEL" || 
		seleccionUsuario === "PAPEL" && seleccionComputador === "PIEDRA") {
		conteoVictoriasUsuario++
		return `El computador seleccionó ${seleccionComputador}, por eso ganaste esta ronda :)`
	}
	conteoVictoriasComputador++
	return `Perdistessss esta ronda, el computador seleccionó ${seleccionComputador}.`
}

let conteoVictoriasComputador = 0
let conteoVictoriasUsuario = 0
let conteoEmpates = 0

function obtenerResultadoPartida() {
	if (conteoVictoriasComputador<conteoVictoriasUsuario) {
		return `Con ${conteoVictoriasUsuario} victorias en sus hombros, Usuario gana esta partida`
	}
	if (conteoVictoriasComputador>conteoVictoriasUsuario) {
		return `Con ${conteoVictoriasComputador} victorias en su código, Computador gana esta partida`
	}
	if (conteoVictoriasComputador===conteoVictoriasUsuario) {
		return `Es un empate!!!`
	}
}

/* function game() {	
	for (let i = 1; i <=5; i++)	{
		let playerSelection = prompt("¿Piedra, papel o tijera?")
		let computerSelection = getComputerChoice()
		console.log(playRound(playerSelection,computerSelection))
	}
	console.log(obtenerResultadoPartida())
}
game() */
