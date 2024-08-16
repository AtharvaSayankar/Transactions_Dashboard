// This function renders original API and response is exported to index.js
async function fetchData() {
  try {
    const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json')
    const data = await response.json();
    return data // Return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Export the fetchData function so it can be used in another file
module.exports = fetchData