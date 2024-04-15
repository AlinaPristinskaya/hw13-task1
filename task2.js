// Async function to fetch and display a random cat GIF URL
async function fetchRandomCatGif() {
    try {
      // API URL that returns a random cat GIF
      const url = 'http://thecatapi.com/api/images/get?format=src&type=gif';
  
      // Fetch the URL directly; the API is configured to redirect to a GIF
      const response = await fetch(url);
  
      // Check if the fetch was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Since the API redirects directly to the GIF, we use the final URL
      console.log(response.url);
    } catch (error) {
      // Log any errors that occur during the fetch operation
      console.error('Failed to fetch the cat GIF:', error);
    }
  }
  
  // Call the function to execute it
  fetchRandomCatGif();