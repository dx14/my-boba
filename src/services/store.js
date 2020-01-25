import { HTTP } from "./base";

async function getAllStores() {
  try {
    const response = await HTTP.get("/stores/getAllStores");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default { getAllStores };
