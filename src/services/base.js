const axios = require('axios')

const getBaseUrl = () => {
    let baseUrl
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'development') {
      baseUrl = "http://localhost:8080/";
    } else {
      baseUrl = "";
    }
    return baseUrl;
}

export const HTTP = axios.create({
  baseURL: getBaseUrl()
});