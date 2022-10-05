const botoes = document.querySelectorAll("[data-filtro]")

console.log(precoTotal)

botoes.forEach(botao => botao.addEventListener("click", () => {
  filtraLivros(botao)  
}))

function filtraLivros(elemento) {
    const tags = elemento.dataset.filtro
    const livrosFiltrados = tags == "disponivel" ? filtraPorDisponibilidade() : filtraPorCategoria(tags)
    imprimeLivros(livrosFiltrados)
    if(tags == "disponivel") {
      const precoDeTodosOsLivros = somaTodosOsPrecos(livrosFiltrados)
      exibeValorTotalDosLivros(precoDeTodosOsLivros)
    }
}

function filtraPorCategoria(tags) {
  return livros.filter(livro => livro.categoria == tags)
}

function filtraPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0)
}

function exibeValorTotalDosLivros(precoDeTodosOsLivros) {
  precoTotal.innerHTML += `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$<span id="valor">${precoDeTodosOsLivros}</span></p>
  </div>
  `
}

