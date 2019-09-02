
    const $pokemon = document.querySelector("#pokemon")
    function renderPokemon (image){
            $pokemon.setAttribute('src', image)
    }

    fetch('pikachu.jpeg')
    // blob (Binary Large Object)
    // lo que hace este metodo es tomar un binario que es una imagen y convertirlo en string que es algo mas legible
    .then(responseData => responseData.blob() )
    .then(binaryLargeObject => {
        
            // me convierte mi imagen en texto y de esta manera ahora si lo puedo pasar a mi imagenG
            const domString = URL.createObjectURL(binaryLargeObject)

            // lo que obtiene domString es una representacion de donde esta mi archivo con una url y un hash y de esta manera es 
            // como puedo pasarle mi domString a mi imagen
            //esto es como base64, es solo un formato de texto valido y legible
            renderPokemon(domString)
     })
    .catch(err => console.error(`Ha ocurrido algun error ${err}`) )