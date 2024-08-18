const sucess = true

const dados = {
  nome: "Aurora",
  idade: 6,
}


async function chamarDados() {
 try {
  const resposta = await new Promise((resolve, reject) => {
    setTimeout(() => reject(dados), 2000)
  })
   console.log(resposta)
   
 } catch (error) {
   console.log("error => ", error)
 }
}

chamarDados()