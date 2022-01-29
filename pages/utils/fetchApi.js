import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';




export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '573a24f850mshecfc0f1dbf4a0edp1deda5jsnfb13b26df949'
          }
    })
    return data
}