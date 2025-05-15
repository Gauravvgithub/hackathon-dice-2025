let characters = [];

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    characters = data;
    displayResults(characters);
  });

document.getElementById('search').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const filtered = characters.filter(char =>
    char.name.toLowerCase().includes(searchTerm)
  );
  displayResults(filtered);
});

function displayResults(data) {
  const container = document.getElementById('results');
  container.innerHTML = '';

  data.forEach(char => {
    container.innerHTML += `
      <div class="card">
        <h2>${char.name}</h2>
        <img src="${char.image}" alt="${char.name}">
        <p>${char.description}</p>
        <em>${char.tagline}</em>
      </div>
    `;
  });
}
