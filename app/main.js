import {imprimeLivros} from "../app/metodoForEach.js"
import {aplicarDescontos} from "../app/metodoMap.js"

let livros = []
const APILivros = `https://guilhermeonrails.github.io/casadocodigo/livros.json
`
requisicaoAPI()

// async function requisicaoAPI() {
//     const resposta = await fetch(APILivros)
//     livros = await resposta.json()
//     imprimeLivros(livros)
// }

async function requisicaoAPI() {
    const resposta = await fetch(APILivros)
    livros = await resposta.json()
    let livrosComDescontos = aplicarDescontos(livros)
    imprimeLivros(livrosComDescontos)
}

