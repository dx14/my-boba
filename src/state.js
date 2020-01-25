const state = {
  selectedTea: null,
  selectedToppings: []
};

export const getters = {
  getSelectedTea: () => state.selectedTea,
  getSelectedToppings: () => state.selectedToppings
};

export const mutations = {
  updateSelectedTea: tea => (state.selectedTea = tea),
  updateSelectedToppings: toppings => (state.selectedToppings = toppings)
};
