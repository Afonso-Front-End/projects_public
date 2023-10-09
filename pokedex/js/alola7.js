const alola = async (start = 722) => {
    clear()
    removeModal()
    const promises = [];
    
    for (let index = start; index < start + 20 && index < 809; index++) {
        promises.push(fetchPokemonData(index));
    }

    const pokemonDataArray = await Promise.all(promises);

    pokemonDataArray.forEach(async (data, index) => {
        const tipos = data.dataPokemon.types.map((type) => type.type.name);
        const cor = data.dataSpecies.color.name

        let corName 
        if(cor == 'white' || cor == 'yellow'){
            corName = '#313131'
            console.log(corName)
        }
        
        const container_cards = document.querySelector('.container-cards');
        const card = document.createElement('div');
        card.className = 'card';

        const pokemonId = data.dataPokemon.id < 10 ? `ID:00${data.dataPokemon.id}` : data.dataPokemon.id < 100 ? `ID:0${data.dataPokemon.id}` : `ID:0${data.dataPokemon.id}`;
        
        card.innerHTML = `
        <div class="imagen">
            <h1 id="id">${pokemonId}</h1>
            <img src="${data.dataPokemon.sprites.other["official-artwork"].front_default}" alt="Imagem do Pokémon" >
        </div>

        <div class="titulo">
            <h2>${data.dataPokemon.name}</h2>
        </div>
        
        <div class="tipo-pokemon">
            ${tipos.map((tipo) =>`<p style="background-color:${cor};color:${corName};">${tipo}</p>`).join('')}
        </div>`;
        card.className = 'card card-hover card-enter';
        
        container_cards.appendChild(card);
        card.classList.add('card.show')
        const cards = document.querySelectorAll('.card-enter');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('active'); // Adiciona a classe "active" para animar a entrada
                }, index * 100); // Adiciona um atraso escalonado para animação suave
            });
        card.addEventListener('click', async () => {
            loaderContainer.style.display = "flex";

            let peso = data.dataPokemon.weight;
            let valorFormatado;
            if (peso < 10000) {
                valorFormatado = (peso / 10).toLocaleString('pt-BR', { minimumFractionDigits: 1 }) + "k";
            } else {
                valorFormatado = (peso / 1000000).toLocaleString('pt-BR', { minimumFractionDigits: 1 }) + "t";
            }
            let alturaEmCm = data.dataPokemon.height;
            let alturaEmMetrosFormatada = (alturaEmCm / 10).toLocaleString('pt-BR', { minimumFractionDigits: 1 }) + "m";

            let container_modal = document.querySelector('.container-modal');
    
            const modal = document.createElement('div');
            const evolucao = document.createElement('div');
            modal.className = 'modal';
            evolucao.className = 'container-evolucao'
            evolutionLoading = true;
            // Buscar informações da cadeia de evolução
            const evolutionChainData = await fetchEvolutionChain(data.dataPokemon.species.url);

            // Obter os nomes dos Pokémon na cadeia de evolução
            const evolutionNames = await getEvolutionNames(evolutionChainData);

            // Obter as imagens dos Pokémon na cadeia de evolução
            const evolutionImages = [];
            for (const name of evolutionNames) {
                const evolutionData = await getEvolutionData(name);
                evolutionImages.push(evolutionData.sprites.other["official-artwork"].front_default);
            }


            modal.innerHTML = `
                <div class="coluna01">
                    <div class="imgCardModal">
                        <img src="${data.dataPokemon.sprites.other["official-artwork"].front_default}">
                    </div>

                    <div class="area-detalhe">
                        <h1 id="tituloCardModal">${data.dataPokemon.name}</h1>
                        <div class="detalhes">
                            <p>Peso: ${valorFormatado}</p>
                            <p>Altura: ${alturaEmMetrosFormatada}</p>
                            <p>Tipo: ${data.dataPokemon.types[0].type.name}</p>
                        </div>
                        <div class="info">
                            <p>${data.dataSpecies.flavor_text_entries[0].flavor_text}</p>
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

            container_modal.appendChild(modal);
            modal.appendChild(evolucao)
            container_modal.classList.add('active');
            evolutionLoading = false;

            // Esconda o loader

            loaderContainer.style.display = "none";
        });
    });
    loadedCards += pokemonDataArray.length;

   
};
