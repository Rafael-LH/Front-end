
async function getAllCharacters(){
 const data = await fetch('https://rickandmortyapi.com/api/character/')
 return await data.json()
}
async function getFirstCharacter(){
 const getFirstCharacter = await fetch('https://rickandmortyapi.com/api/character/1')
 return await getFirstCharacter.json()
}
async function getDimensionFirstCharacter(resultAllCharacters){
 const dimensionFirstCharacter = await fetch(`${resultAllCharacters.results[0].origin.url}`);
 return await dimensionFirstCharacter.json();
}

(async function(){
 
 const loading = document.querySelector("#loading")
 const container = document.querySelector("#content")
 const resultAllCharacters = await getAllCharacters()
 // console.log(resultAllCharacters.results[0]);
 
 const resultFirstCharacter = await getFirstCharacter()
 const resultDimensionFirstCharacter = await getDimensionFirstCharacter(resultAllCharacters)
 const image = new Image()

 image.src = resultFirstCharacter.image
 image.addEventListener('load', () => {
  loading.style.display = 'none'
  container.innerHTML = `<p>Total characters: ${resultAllCharacters.info.count}</p>`
  container.appendChild(image)
  container.innerHTML += `<p>First character: ${resultFirstCharacter.name}</p>`
  container.innerHTML += `<p>${resultDimensionFirstCharacter.dimension}</p>`
 })

}())