import { HTTP } from './base'

async function getAllToppings() {
    try {
      const response = await HTTP.get('/toppings/getAllToppings');
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

export default { getAllToppings }