let requisicao = async () => {
  for (let index = 1; index < 100; index++) {
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    let especie = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${index}/`
    );

    let dadospokemon = await pokemon.json();
    let dadosespecie = await especie.json();

    let contain = document.querySelector(".contain");

    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let img = document.createElement("img");
    let button = document.createElement("button");
    div.className = "card";
    button.innerText = "card";

    contain.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p1);
    div.appendChild(img);
    div.appendChild(p2);
    div.appendChild(button);

    h1.append(`${dadospokemon.name}`);
    p1.append(`${dadospokemon.types[0].type.name}`);

    p2.append(`${dadosespecie.color.name}`);
  

    if (dadospokemon.sprites.other.home.front_default) {
      img.src = dadospokemon.sprites.other.home.front_default;
    } else if (dadospokemon.sprites.front_default) {
      img.src = dadospokemon.sprites.other["official-artwork"].front_default;
    }

    document.querySelector("button");
    let containpoker = document.querySelector(".contain-poker");
    button.addEventListener("click", () => {
      console.log(`click no index ${index}`);
      let details = document.querySelector(".details");
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      let h1 = document.createElement("h1");
      let imgfundopoker = document.createElement("img");

      div2.className = "types";
      div1.className = "imgfundopoker";
      imgfundopoker.src = dadospokemon.sprites.other.home.front_default;

      containpoker.appendChild(div1);
      containpoker.appendChild(div2);
      containpoker.appendChild(div3);

      div1.append(imgfundopoker);
      div2.appendChild(p1);
      div2.appendChild(p2);
      div2.appendChild(h1);
      div3.appendChild(p3);
      div3.appendChild(p4);
      h1.append(`${dadospokemon.name}`);

      if (dadospokemon.height > 0) {
        const heightString = dadospokemon.height.toString();
        const formattedHeight = `${heightString[0]}.${heightString.slice(1)}`;
        p3.innerText = `${formattedHeight} m`;
      }
      if (dadospokemon.height > 0) {
        const heightString = dadospokemon.height.toString();
        const formattedHeight =
          heightString.length === 1
            ? `0.${heightString}`
            : heightString.slice(0, -1) + "." + heightString.slice(-1);
        p3.innerText = `${formattedHeight} m`;
      }

      if (dadospokemon.types.length >= 1) {
        p1.append(`${dadospokemon.types[0].type.name}`);
      }
      if (dadospokemon.types.length >= 2) {
        p2.append(`${dadospokemon.types[1].type.name}`);
      }

      let limpar = () => {
        div1.remove(imgfundopoker);
        div2.remove(p1);
        div2.remove(p2);
        div2.remove(h1);
        div3.remove(p3);
        containpoker.style.backgroundColor = ``;
      };

      document.getElementById("closed").addEventListener("click", () => {
        details.style.display = "none";
        limpar();
      });

      details.style.display = "block";
      if(dadosespecie.color.name == 'red'){
        containpoker.style.backgroundColor = `#FBB36C`;
  
      }
    });

    if (dadosespecie.color.name) {
      button.style.backgroundColor = `${dadosespecie.color.name}`;
      button.style.color = `#F2F2F2`;
      if (
        dadosespecie.color.name == "yellow" ||
        dadosespecie.color.name == "pink" ||
        dadosespecie.color.name == "white"){
        button.style.color = `black`;
      }
      
      // if(dadosespecie.color.name == 'green'){
      //   div.style.backgroundColor = `#9BCC50`;
      // }
      // if(dadosespecie.color.name == 'blue'){
      //   div.style.backgroundColor = `#4592C4`;
      // }
    }
  }
};

requisicao();
