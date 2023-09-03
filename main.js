// Funcion getComputerChoice
// cse declara una variable "seleccion" que almacenará la selección de la computadora
// se obtiene un número aleatorio entre 0 y 9, ese numero se pasa por módulo 3 y se almacena en la variable "seleccion"
// se crea un switch, el cual según la variable "selección", retorna si la computadora seleccionó piedra papel o tijera

function getComputerChoice() {
	// let seleccion
	// seleccion = Math.floor(Math.random()*10)%3
	// Solucion inicial
	// switch (Math.floor(Math.random()*10)%3) {
	// case 0:
	// 	return "Piedra"
	// 	break;
	// case 1:
	// 	return "Papel"
	// 	break;
	// case 2:
	// 	return "Tijera"
	// 	break;
	// }


	// solución por array
	const seleccionComputadora = ["Piedra", "Tijera", "Papel"]
	return seleccionComputadora[Math.floor(Math.random()*3)]
}

// Function playRound
// la función toma dos parámetros "playerSelection" y "computerSelection"
// Iguala las mayúsculas y minúsculas para poder comparar las cadenas
// compara los parámetros
// si son iguales, retorna la cadena con el empate
// se evaluan las comparaciones para victoria del usuario
	// si la seleccion del usuario es piedra y la del computador tijera, 
	// o si es tijera y del computador papel,
	// o si es papel y del computador es piedra
	// retorna la cadena de victoria del usuario
// Si no se cumple ninguna de las condiciones anteriores, se declara la victoria del compu

function playRound(playerSelection, computerSelection) {
	let usuario = playerSelection.toUpperCase()
	let computador = computerSelection.toUpperCase()
	if (usuario === computador) {
		empates++
		return `El computador también seleccionó ${computador}, hay un empate en esta ronda`
	}
	if (usuario === "PIEDRA" && computador === "TIJERA" || 
		usuario === "TIJERA" && computador === "PAPEL" || 
		usuario === "PAPEL" && computador === "PIEDRA") {
		victoriasUsuario++
		return `El computador seleccionó ${computador}, por eso ganaste esta ronda :)`
	}
	victoriasComputador++
	return `Perdistessss esta ronda, el computador seleccionó ${computador}.`
}
// const playerSelection = "piedra"
// const computerSelection = getComputerChoice()
// console.log(playRound(playerSelection, computerSelection))


// crea la variable "victoriasComputador" que almacena las victorias del computador
// crea la variable "victoriasUsuario" que almacena las victorias del usuario
// crea la variable "empates" que almacena los empates
let victoriasComputador = 0
let victoriasUsuario = 0
let empates = 0


// Funcion ganadorFinal
// toma la variable VictoriasComputador y evalúa
	//Si es menor que las victoriasUsuario, declara al usuario ganador
	// si es mayor, declara al usuario perdedor
	// si son iguales, declara un empate,
function ganadorFinal() {
	if (victoriasComputador<victoriasUsuario) return `Con ${victoriasUsuario} victorias en sus hombros, Usuario gana esta partida`
	if (victoriasComputador>victoriasUsuario) return `Con ${victoriasComputador} victorias en su código, Computador gana esta partida`
	if (victoriasComputador===victoriasUsuario) return `Es un empate!!!`
}


// Funcion game
// crea un loop de con 5 iteraciones donde
// crea una variable que toma el la seleccion del usuario
// toma la selección de la computadora
// las compara y arroja el resultado

function game() {
	
	for (let i = 1; i <=5; i++)	{
		let playerSelection = prompt("¿Piedra, papel o tijera?")
		let computerSelection = getComputerChoice()
		console.log(playRound(playerSelection,computerSelection))
	}
	console.log(ganadorFinal())
}
game()