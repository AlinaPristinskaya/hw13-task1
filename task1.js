const url = 'https://pokeapi.co/api/v2/pokemon/squirtle/';

// Use fetch to get data from the API
fetch(url)
  .then(response => {
    // Convert the response to JSON
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Extract and print the required information
    const name = data.name;
    const weight = data.weight;
    const abilities = data.abilities.map(ability => ability.ability.name).join(", ");

    console.log(`Name: ${name}`);
    console.log(`Weight: ${weight}`);
    console.log(`Abilities: ${abilities}`);
  })
  .catch(error => {
    // Handle any errors
    console.error('There was a problem with the fetch operation:', error);
  });