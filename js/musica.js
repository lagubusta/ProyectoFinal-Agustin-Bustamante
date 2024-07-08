
const ENDPOINT_URL = 'https://shazam.p.rapidapi.com/PinkFloyd/get-details?id=567072&l=en-US'
const X_RAPIDAPI_KEY = ''
const X_RAPIDAPI_HOST = ''

async function run() {
  const response = await fetch(ENDPOINT_URL, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b936a52aa9msh333397d6af2f23fp158bb6jsne985c870d611',
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
  })

  return await response.text()
}

run().then(console.log).catch(console.error)
