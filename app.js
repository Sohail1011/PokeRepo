const library = document.getElementById('list');
const content = document.getElementById('main');

async function readPokemon() {
    for (let i = 1; i <= 20; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        articleBlog(data);
    }
    /* const results = data.results; */
}

const articleBlog = (pokemon) => {
    const listado = document.createElement('article');

    listado.innerHTML = `
        <div class="img-content">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">            
        </div>
        <h2>${pokemon.name}</h2>
`;
    library.appendChild(listado);
}

readPokemon();

const readNeko = async () => {
    const gallery = document.getElementById('list');
    const res = await fetch("https://nekos.best/api/v2/waifu?amount=20");
    const data = await res.json();
    const print = data.results;

    print.forEach((p) => {
        const render = document.createRange().createContextualFragment(
            `
            <article>
             <div class="img-content">
                <img src="${p.url}" alt="${p.artist_name}">
             </div>
             <h2>${p.artist_name}</h2>
            </article>
            `
        );
        gallery.appendChild(render);
    });
}

/* readNeko(); */
let dataFound = document.createElement('article');

const btnConsulta = document.getElementById('observar');
btnConsulta.addEventListener('click', async function (e) {
    e.preventDefault();
    try {
        dataFound.remove();

        const inputValue = document.getElementById('unifed').value;
        const pokemonRequest = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
        const response = await fetch(pokemonRequest);
        const data = await response.json();
        library.style.display = 'none';

        dataFound.innerHTML = `
            <div class="img-content">
                <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">            
            </div>
            <h2>${data.name}</h2>
            `;

        content.appendChild(dataFound);

    } catch (error) {
        content.innerHTML = `<h2>No se pudo encontrar: ${error}.</h2>`;
    }
});