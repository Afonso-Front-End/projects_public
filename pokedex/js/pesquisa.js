let resultList = document.querySelector("#result-list");
let input = document.querySelector("input");
let lupaPesquisar = document.getElementById("lupaPesquisar"); // Botão de pesquisa
let resultPesquisa = document.getElementById("result-pesquisa");
let listPesquisa = document.getElementById("list-pesquisa");
let loaderContainer = document.querySelector(".loader-container"); // Adicionei esta linha para encontrar o elemento do loader.


let allPokemon = [];
let nomesPesquisados = [];

// Função para buscar todos os Pokémon iniciais (ou uma lista completa de Pokémon)
async function fetchAllPokemon() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1011"
    );
    const data = await response.json();
    allPokemon.length = 0;

    allPokemon.push(
      ...data.results.map((pokemon) => ({ name: pokemon.name.toLowerCase() }))
    );
  } catch (error) {
    console.error("Erro ao buscar a lista de Pokémon:", error);
  }
}

// Função para exibir os resultados da pesquisa
function displayResults(results) {
  resultList.innerHTML = "";
  resultList.classList.add("active");

  if (results.length === 0) {
    resultList.innerHTML = "Nenhum Pokémon correspondente encontrado.";
    return;
  } else if (input.value.length == 0) {
    resultPesquisa.classList.remove("active");
    resultList.classList.remove("active");
  }

  results.forEach((pokemon) => {
    const listItem = document.createElement("li");
    listItem.textContent = pokemon.name;
    listItem.addEventListener("click", () => {
      input.value = pokemon.name; // Autocompletar o input com o nome do Pokémon clicado
    });
    resultList.appendChild(listItem);
  });
}

// Função para limpar os resultados da pesquisa e o loader
function clearResults() {
  resultList.innerHTML = "";
  resultPesquisa.classList.remove("active");
  // listPesquisa.innerHTML = "";
}


// Evento de entrada no campo de pesquisa
input.addEventListener("input", async (e) => {

  containerCards.style.display = 'none'
  clearResults(); // Alterei o nome da função aqui
  if (input.value.length <= 0) {
    kanto();
  }
  const inputValue = e.target.value.trim().toLowerCase();
  const filteredPokemon = allPokemon.filter((pokemon) => {
    return pokemon.name.startsWith(inputValue);
  });
  displayResults(filteredPokemon);
});

// Evento de clique no botão de pesquisa
lupaPesquisar.addEventListener("click", async () => {
  const inputValue = input.value.trim().toLowerCase();
  if (input.value.length == "") {
    alert("Digite algo");
    return;
  } else {
    clear();
    // Verifique se o nome já foi pesquisado antes de prosseguir
    if (nomesPesquisados.includes(inputValue)) {
      alert("Este Pokémon já foi pesquisado");
      resultList.classList.remove("active");
      resultPesquisa.classList.add("active");
      listPesquisa.classList.add("active");
      return;
    }
    loaderContainer.style.display = "flex";

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputValue}`
    );

    if (response.status === 404) {
      loaderContainer.style.display = "none";
      alert("Pokémon não encontrado");
      return;
    } else {
      const data = await response.json();
      const tipos = data.types.map((type) => type.type.name);
      const pokemonId =
        data.id < 10
          ? `ID:00${data.id}`
          : data.id < 100
          ? `ID:0${data.id}`
          : `ID:0${data.id}`;

      resultList.classList.remove("active");
      resultPesquisa.classList.add("active");

      // Adicione o nome do Pokémon pesquisado ao array
      nomesPesquisados.push(inputValue);

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="imagen">
          <h1 id="id">${pokemonId}</h1>
          <img src="${
            data.sprites.other["official-artwork"].front_default
          }" alt="Imagem do Pokémon">
        </div>

        <div class="titulo">
          <h2>${data.name}</h2>
        </div>

        <div class="tipo-pokemon">
          ${tipos
            .map((tipo) => `<p style="background-color:#FF4655;">${tipo}</p>`)
            .join("")}
        </div>
      `;
      listPesquisa.appendChild(card);
      loaderContainer.style.display = "none";

      

      card.addEventListener("click", async () => {
        loaderContainer.style.display = "flex";
        // Obtém a URL da espécie do Pokémon a partir dos dados principais do Pokémon
        async function fetchPokemonDescription(speciesURL) {
          try {
            const response = await fetch(speciesURL);
            const speciesData = await response.json();
  
            // Encontre a descrição desejada na lista de descrições (geralmente em inglês)
            const description = speciesData.flavor_text_entries.find(
              (entry) => entry.language.name === "en"
            );
  
            if (description) {
              return description.flavor_text;
            } else {
              return "Descrição não encontrada.";
            }
          } catch (error) {
            console.error("Erro ao buscar a descrição da espécie:", error);
            throw error;
          }
        }
        const speciesURL = data.species.url;

        try {
          // Busca a descrição da espécie do Pokémon
          var description = await fetchPokemonDescription(speciesURL);
        } catch (error) {
          console.error("Erro ao buscar a descrição do Pokémon:", error);
        } finally {
        }

        let peso = data.weight;
        let valorFormatado;
        if (peso < 10000) {
          valorFormatado =
            (peso / 10).toLocaleString("pt-BR", { minimumFractionDigits: 1 }) +
            "k";
        } else {
          valorFormatado =
            (peso / 1000000).toLocaleString("pt-BR", {
              minimumFractionDigits: 1,
            }) + "t";
        }
        let alturaEmCm = data.height;
        let alturaEmMetrosFormatada =
          (alturaEmCm / 10).toLocaleString("pt-BR", {
            minimumFractionDigits: 1,
          }) + "m";

        let container_modal = document.querySelector(".container-modal");

        const modal = document.createElement("div");
        const evolucao = document.createElement("div");
        modal.className = "modal";
        evolucao.className = "container-evolucao";
        evolutionLoading = true;
        // Buscar informações da cadeia de evolução 
        const evolutionChainData = await fetchEvolutionChain(data.species.url);

        // Obter os nomes dos Pokémon na cadeia de evolução
        const evolutionNames = await getEvolutionNames(evolutionChainData);

        // Obter as imagens dos Pokémon na cadeia de evolução
        const evolutionImages = [];
        for (const name of evolutionNames) {
          // Corrija a chamada da função para getEvolutionData
          const evolutionData = await getEvolutionData(name);
          evolutionImages.push(
            evolutionData.sprites.other["official-artwork"].front_default
          );
        }
        console.log(evolutionChainData);
        modal.innerHTML = `
          <div class="coluna01">
            <div class="imgCardModal">
              <img src="${data.sprites.other["official-artwork"].front_default}">
            </div>

            <div class="area-detalhe">
              <h1 id="tituloCardModal">${data.name}</h1>
              <div class="detalhes">
                <p>Peso: ${valorFormatado}</p>
                <p>Altura: ${alturaEmMetrosFormatada}</p>
                <p>Tipo: ${data.types[0].type.name}</p>
              </div>
              <div class="info">
                <p>${description}</p>
              </div>
            </div>
          </div>`;

        // Exibir imagens da evolução
        evolutionImages.forEach((evolutionImage, i) => {
          evolucao.innerHTML += `
          <div class="evolucao">
            <img src="${evolutionImage}" alt="Imagem da Evolução ${evolutionNames[i]}">
            <p>${evolutionNames[i]}</p>
          </div>`;
        });
        loaderContainer.style.display = "none";
        container_modal.appendChild(modal);
        modal.appendChild(evolucao);
        container_modal.classList.add("active");
        evolutionLoading = false;

      });
    }
  }
});

// Inicialização
(async () => {
  await fetchAllPokemon();
})();
