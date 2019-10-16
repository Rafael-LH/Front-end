class API {
    async fetch(id){
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            const responseData = await data.url
            const responseFetch = await fetch(responseData)
            const response = await responseFetch.json()
            let res = response.name[0].toUpperCase() + response.name.slice(1, response.name.length)
            debugger
                        
        } catch (error) {
            console.log(`Ha ocurrido algun error ${error}`);
        }

    }
}
const api = new API()
api.fetch(14)

class Pokemon {
    container = document.querySelector("#showPokemon")
    renderPokemon(name){
        this.container.textContent = `El nombre del pokémon es ${name}`   
    }
}




