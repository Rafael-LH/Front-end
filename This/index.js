const container = document.querySelector("#showPokemon")
  
class API {

    BASE_HTTP = 'https://pokeapi.co/api/v2/pokemon/'    
    async fetch(id){
        try {
            const data = await fetch(`${this.BASE_HTTP}${id}/`)
            if(data.status === 200){
                
            const responseData = await data.url
            let responseFetch = await fetch(responseData)

            if(responseFetch.status === 200){

                const response = await responseFetch.json()
                const res = response.name[0].toUpperCase() + response.name.slice(1, response.name.length)
               
                setTimeout(()=>{
                    container.textContent = `El nombre del pokémon es ${res}`   
                }, 1000)

            }else if(responseFetch.status === 404){
                container.innerHTML = `<span class='warning'>Pokémon no encontrado ⚠︎</span>`   
            }else{
                container.innerHTML = `<span class='danger'>Ha ocurrido algun problema, intentalo mas tarde ☠︎</span>`   
            }

            }else if(data.status === 404){
                container.innerHTML = `<span class='warning'>Pokémon no encontrado ⚠︎</span>`   
            }else{
                container.innerHTML = `<span class='danger'>Ha ocurrido algun problema, intentalo mas tarde ☠︎</span>`   
            }
                        
        } catch (error) {
            container.innerHTML = `<span class='danger'>Ha ocurrido algun problema, intentalo mas tarde ☠︎</span>`   
            // console.log(`Ha ocurrido algun error ${error}`); // solo descomentar para hacer testing
        }
    }
}

 

class Pokemon extends API{
    constructor(id){
        super(id)
        this.id = id
    }
    container = document.querySelector("#showPokemon")
    renderPokemon(){
        container.textContent = `El nombre del pokémon es ${name}`   
    }  
    renderType(){
        container.textContent = `El nombre del pokémon es ${type}`   
    }  
}
const pikachu = new Pokemon
pikachu.fetch(25);
container.textContent = `Cargando...`   



