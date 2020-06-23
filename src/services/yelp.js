import { HTTP } from "./base";

async function getStoresFromYelp(stores, latitude, longitude) {
  let storeInfo = [];

  for (const store of stores) {
    const response = await getStoreInfo({
      term: store.displayName,
      latitude,
      longitude
    });

    if (
      response &&
      response.name.toLowerCase() == store.displayName.toLowerCase()
    ) {
      storeInfo.push(response);
    }
  }

  return storeInfo;
}

async function getStoreInfo(request) {
  try {
    const response = await HTTP.get("/yelp/getStoreInfo", {
      params: {
        term: request.term,
        latitude: request.latitude,
        longitude: request.longitude
      }
    });
    return response.data.data[0] || {};
  } catch (error) {
    console.error(error);
  }
}

export default { getStoresFromYelp };
