async function readPokemon() {
    const library = document.getElementById('list');
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    const results = data.results;

    results.forEach((r) => {
        const listado = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="img-content">
                <img src="${r.url}" alt="${r.name}">
                <h2>${r.name}</h2>
            </div>
        </article>
        `);
        library.appendChild(listado);
    });
}

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

readNeko();