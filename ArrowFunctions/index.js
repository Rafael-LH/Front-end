const container = document.querySelector("#showPokemon")
const showButtons = document.querySelector("#containerButtons")

// function randomId(max) {
//         return  Math.floor(Math.random() * (max - 1) +1 );
// }

const randomId = max => Math.floor(Math.random() * (max - 1) +1 );
console.log( randomId(150) )

const example1 = {
    max: 150,
    randomId: function(_) {
        return Math.floor(Math.random() * (this.max - 1) +1 );   
    }
}
console.log('Example 1')
console.log(example1.randomId())

const example2 = {
    max: 150,
    // Con arrow fuction no podemos heredar de this en el objeto contexto de example2 porque las arrow fuction heredan de su padre superior
    randomId: (_) => Math.floor(Math.random() * (this.max - 1) +1 ) //que en este caso es window
    // si tubieramos una clase la cual estamos extendiendo y creamos en el constructor una arrow function y imprimimos this
    //lo que hara es heredar de la clase superior en este caso de la clase padre y ya no de window
}
// console.log('Example 2') //descomentar para ver el resultado
// console.log(example2.randomId())

class API {

    BASE_HTTP = 'https://pokeapi.co/api/v2/pokemon/'    
    async fetch(id){
        try {
            container.textContent = `Cargando...`   
            showButtons.classList.add('hiddenButtons')   

            const data = await fetch(`${this.BASE_HTTP}${id}/`)
            if(data.status === 200){
                
            const responseData = await data.url
            let responseFetch = await fetch(responseData)

            if(responseFetch.status === 200){

                const response = await responseFetch.json()
                this.pokemon = response
                const res = response.name[0].toUpperCase() + response.name.slice(1, response.name.length)
                
                setTimeout(()=>{
                    container.textContent = `El nombre del pokémon es ${res}`
                    showButtons.classList.remove('hiddenButtons')   
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
        this.type.addEventListener('click', (_) => this.renderType() )
        this.name.addEventListener('click', (_) => this.renderPokemon() )
        this.random.addEventListener('click', () =>{
            this.fetch(this.randomId)
        })
    }
    container = document.querySelector("#showPokemon")
    type = document.querySelector("#type")
    name = document.querySelector("#name")
    random = document.querySelector("#random")
    
    get randomId(){
        return Math.floor(Math.random() * (150 - 1) +1 );   
    }
    renderPokemon(){
        container.textContent = `El nombre del pokémon es ${this.pokemon.name}`   
    }  
    renderType(){
        container.textContent = `Es de tipo ${this.pokemon.types[0].type.name}`   
    }  
}
const pikachu = new Pokemon
pikachu.fetch(25);

// Como un método de un objeto
// Cuando una función es llamada como un método de un objeto, el this cambia por el metodo del objeto llamado.



