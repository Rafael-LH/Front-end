const object = {
    container: document.querySelector("#showPokemon"),
    renderPokemon: function(name){
        this.container.textContent = `El nombre del pokémon es ${name}`   
    }
}

console.log(object.renderPokemon('Pikachu'));
