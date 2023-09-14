import axios from 'axios'

const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  params: {
    part: 'snippet,id',
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'cb10548f74msh711a638f9c9f2d8p1a7f06jsnd26b29ab46d0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };
 