const sucess = true

const dados = {
  nome: "Aurora",
  idade: 6,
}

new Promise((resolve, reject) => {
 setTimeout(() => resolve(dados), 2000)
})

.then(resposta => { //acessa sucess através do then -> callback
 console.log(resposta)
})
.catch(error => {
 console.log(error)
})
.finally(() => { //nao passa parametro
 console.log("processo finalizado") 
})

fetch("https://www.google.com.br/?hl=pt-BR")
.then(resposta => console.log(resposta))
.catch(resposta => console.log(error))










