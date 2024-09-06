function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  //se campoPesquisa for vazio
  if (!campoPesquisa) {
    section.innerHTML = "<p>Busca Vazia - Digite o nome de um jogo ou palavras chave</p>";
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()
 
  // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      //cria um novo elemento
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p class="descricao-meta">Gênero: ${dado.genero}</p>
          <p class="descricao-meta">Developer: ${dado.developer}</p>
          <p class="descricao-meta">Publisher: ${dado.publisher}</p>
          <p class="descricao-meta">Comprar: <a href="${dado.linkCompra} target="_blank">https://www.nintendo.com/store/products/the-legend-of-zelda-breath-of-the-wild-switch/</a></p>
        </div>
      `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}