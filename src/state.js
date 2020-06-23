const state = {
  selectedTea: null,
  selectedToppings: [],
  stores: [],
  validStores: [],
  storeInfo: [],
  latitude: null,
  longitude: null
};

export const getters = {
  getSelectedTea: () => state.selectedTea,
  getSelectedToppings: () => state.selectedToppings,
  getStores: () => state.stores,
  getValidStores: () => state.validStores,
  getStoreInfo: () => state.storeInfo,
  getLatitude: () => state.latitude,
  getLongitude: () => state.longitude
};

export const mutations = {
  updateSelectedTea: tea => (state.selectedTea = tea),
  updateSelectedToppings: toppings => (state.selectedToppings = toppings),
  updateStores: stores => (state.stores = stores),
  updateValidStores: stores => (state.validStores = stores),
  updateStoreInfo: storeInfo => (state.storeInfo = storeInfo),
  updateLatitude: latitude => (state.latitude = latitude),
  updateLongitude: longitude => (state.longitude = longitude)
};
