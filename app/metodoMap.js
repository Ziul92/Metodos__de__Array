function aplicarDescontos(livros) {
    const desconto = 0.3
    const livrosComDescontos = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDescontos
}