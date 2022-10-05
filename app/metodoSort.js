const ordenar = document.querySelector("[data-ordenacao]")

ordenar.addEventListener("click", ordenaPorPreco)

function ordenaPorPreco() {
    const ordenaOsLivros = livros.sort((a, b) => a.preco - b.preco)
    imprimeLivros(ordenaOsLivros)
}