// console.log("relógio funcionando")

const horasElemento = document.querySelector(".hour strong") //para permitir que inclua dentro do strong o numero que esta sendo puxado pelo id
const minutosElemento = document.querySelector(".minutes strong")
const segundosElemento = document.querySelector(".seconds strong")
const buttonElement = document.querySelector('button')

function relogio() {
 const dataAtual = new Date()
 const horas = dataAtual.getHours().toString().padStart(2, '0') //converte para string
 const minutos = dataAtual.getMinutes().toString().padStart(2, '0')
 const segundos = dataAtual.getSeconds().toString().padStart(2, '0')

 // console.log("horas: " + horas, "minutos: " + minutos, "segundos: " + segundos)

 horasElemento.innerHTML = horas
 minutosElemento.innerHTML = minutos
 segundosElemento.innerHTML = segundos
}

//variavel que fará a parada do relogio
const idIntervaloRelogio = setInterval(relogio, 1000)

//evento do botão
buttonElement.addEventListener('click', () => {
 clearInterval(idIntervaloRelogio)
})