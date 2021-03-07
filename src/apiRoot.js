const DEV_URL = 'http://localhost:3000/';
const PROD_URL = 'https://heroinequest-api.herokuapp.com/';
const API_ROOT = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;

export default API_ROOT;