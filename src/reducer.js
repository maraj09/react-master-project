export const reducer = (state, action) => {
  if (action.type === "ADD_PRODUCT") {
    let newProduct = [...state.productList, action.payload];
    return { ...state, productList: newProduct };
  }

  if (action.type === "INCREASE_AMOUNT" || action.type === "DECREASE_AMOUNT") {
    let tempProductList = state.productList
      .map((product) => {
        if (product.id === action.payload) {
          if (action.type === "INCREASE_AMOUNT") {
            return { ...product, quantity: product.quantity + 1, totalPrice: product.productPrice * (product.quantity + 1) };
          } else if (action.type === "DECREASE_AMOUNT") {
            return { ...product, quantity: product.quantity - 1, totalPrice: product.productPrice * (product.quantity - 1) };
          }
        }
        return product;
      })
      .filter((product) => product.quantity > 0);
    return { ...state, productList: tempProductList };
  }

  if (action.type === "TOTAL_PRICE") {
    let totalPrice = state.productList.reduce((total, product) => {
      total += parseInt(product.totalPrice);
      return total;
    }, 0);
    return { ...state, totalPrice };
  }
  if (action.type === "DELETE_PRODUCT") {
    let newProductList = state.productList.filter((product) => product.id !== action.payload);
    return { ...state, productList: newProductList };
  }
  if (action.type === "EDIT_PRODUCT") {
    let newProductList = state.productList.map((product) => {
      if (product.id === action.payload.id) {
        return { ...product, ...action.payload };
      }
      return product;
    });
    return { ...state, productList: newProductList };
  }
};
