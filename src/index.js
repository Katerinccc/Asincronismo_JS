const API = 'https://rickandmortyapi.com/api/character/'

async function getFromApi(id) {
  const response = await fetch(`${API}/${id}`);
  const data = await response.json();
  return data;
}

function getCharacter(){
  const character = document.getElementById("get-character");
  const characterNumber = Number(character.value);
  const nameCharacter = document.getElementById("name");
  const specieCharacter = document.getElementById("species");
  const locationCharacter = document.getElementById("location");
  const imageCharacter = document.getElementById("imageCharacter");

  getFromApi(characterNumber)
    .then(data => {
      nameCharacter.innerText = "El nombre del personaje es: " + data.name;
      specieCharacter.innerText = "es de la especie: " + data.species;
      locationCharacter.innerText = "y se encuentra en: " + data.location.name;
      imageCharacter.src = data.image;
  });
}