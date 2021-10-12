export const reducer = (state, action) => {
  if (action.type === "ADD_PRODUCT") {
    let newProduct = [...state.productList, action.payload];
    return { ...state, productList: newProduct };
  }
};