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
  const imageCharacter = document.getElementById("imageCharacter");

  getFromApi(characterNumber)
    .then(data => {
      nameCharacter.innerText = "El nombre del personaje es: " + data.name;
      imageCharacter.src = data.image;
  });
}

// async function getFromApi(id) {
//   const response = await fetch(`${API}/${id}`);
//   const data1 = await response.json();
//   const name = data1.name;
//   return name;
// }