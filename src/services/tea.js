import { HTTP } from "./base";

async function getAllTeas() {
  try {
    const response = await HTTP.get("/teas/getAllTeas");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default { getAllTeas };
