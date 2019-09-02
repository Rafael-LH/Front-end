
    const $pokemon = document.querySelector("#pokemon")
    function renderPokemon (image){
            $pokemon.setAttribute('src', image)
    }
    const loader = element => element.style.display = 'none'

    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(responseData => responseData.json() )
    .then(response => {

        const $loader = document.querySelector("#loading")
        renderPokemon(response.sprites.front_default)
        loader($loader)
     })
    .catch(err => console.log(`Ha ocurrido algun error ${err}`) );
    