import calcularImposto, { printName, teste } from "./regras.js" //utilizo a importação nomeada
//faz uma unica importação com a FUNÇÃO calcularImposto de regras.js -> ao contrario das outras nao tem o "export"  
//MESCLA importação padrão e nomeada!!!!!!
//import calcularImposto from "./regras.js" -> importação padrão


printName("amora") //puxa mensagem com nome da função que esta sendo importada
console.log(teste) //le variavel teste
console.log(calcularImposto(10000));

import "./timeOut.js"


 







