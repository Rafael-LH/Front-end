
    const $pokemon = document.querySelector("#pokemon")
    function renderPokemon(image){
            $pokemon.setAttribute('src', image)
    }
    // const $obj = {
    //     method: 'GET',
    //     headers:{
    //         'Content-Type': 'application/json',
    //     },
        // tenemos hacer nuestro objeto un texto para poderlo enviarlo de esta manera. y esto lo hacemos con JSON.stringify
    //     body: JSON.stringify({
    //           name: 'Rafael',
    //          'lastName': 'Lopez',
    //           age: 24   
    //     })
    // } 
    fetch('pokemon.json')
    .then(responseData => responseData.json() )
    .then(response => {
            const $container = document.querySelector("#container")

            response.Pokemon.forEach(pokemon => {
                $container.innerHTML +=  get_pokemon(pokemon) 
            });

     })
    .catch(err => console.error(`Ha ocurrido algun error ${err}`) )
     function get_pokemon(pokemon){
             return (
                 `
                    <li>Name: ${pokemon.name}</li>
                    <li><img src="${pokemon.image}" height="200" alt="Pikachu" /></li>
                 `
             )   
     }