import axios from 'axios'

export async function getNeoFeed(startDate: string, endDate: string) {
  const API_KEY = 'htBwpeAw4iE0TuuonKLFSpSVLSEi9VL5Pqfk0UCO'

  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`
  try {
    const result = await axios.get(url)

    return result.data
  } catch (error) {
    return error
  }
}
