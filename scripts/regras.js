console.log("toda minha regra esta aqui")

export const teste = "minha variavel"

export function printName(name) { //exporto função com nome para ser lido na proxima pagina
 console.log("seu nome é: ", name)
}
 
function calcularImposto(valor) {
 return valor * 0.16
}

export default calcularImposto //exportação padrão