const axios = require('axios')

// const instance = axios.create({
//     baseURL: "http://localhost:8080/"
//   });

// const getBaseUrl = () => {
//     let baseUrl
//     if (process.env.NODE_ENV === 'development') {
//       baseUrl = "http://localhost:8080/";
//     } else {
//       baseUrl = "";
//     }
//     return baseUrl;
// }



export const HTTP = axios.create({
  baseURL: "http://localhost:8080/"
});