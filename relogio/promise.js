const sucess = true

new Promise((resolve, reject) => {
 if(sucess) {
   resolve("legal")
 }
   reject("falha")
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




