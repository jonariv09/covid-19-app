
export const axiosOptions = {
  baseURL: 'https://covid-193.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
  }
};