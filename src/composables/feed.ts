import axios from "axios";


export async function getNeoFeed(startDate: string, endDate: string ){

    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`

    return axios.get(url);
}

