const url = 'https://pokeapi.co/api/v2/pokemon/nidorino';

// Use fetch to get data from the API
fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Extract and print the required information
    const name = data.name;
    const weight = data.weight;
    const abilities = data.abilities

    console.log(`Name: ${name}`);
    console.log(`Weight: ${weight}`);
    console.log(`Abilities: ${JSON.stringify(abilities, null, 2)}`);
    
  })
  .catch(error => {
    // Handle any errors
    console.error('There was a problem with the fetch operation:', error);
  });