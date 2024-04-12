import axios from 'axios';
const REACT_APP_RAPID_API_KEY='057b3d2013msha3a73d3ec8135b5p158c17jsn4d96b2759a88'



const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}