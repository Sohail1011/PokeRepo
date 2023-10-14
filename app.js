const library = document.getElementById('list');

async function readPokemon() {
    for (let i = 1; i <= 20; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        articleBlog(data);
    }
    /* const results = data.results; */
}

const articleBlog = (pokemon) => {
    const listado = document.createElement('div');
    listado.innerHTML = `
    <article>
        <div class="img-content">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="">            
        </div>
        <h2>${pokemon.name}</h2>
    </article>
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
            <article class="content">
             <div class="img-content">
                <img src="${p.url}" alt="${p.artist_name}">
                <h2>${p.artist_name}</h2>
             </div>   
            </article>
            `
        );
        gallery.appendChild(render);
    });
}

/* readNeko(); */

/* const selectNumber = document.querySelector('input');

let valueNumber = selectNumber.value;

const btnConsulta = document.querySelector('button');
btnConsulta.addEventListener('click',) */