const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'cart':
      return {
        ...state,
        cart: action.cart
      };
    default:
      return state;
  }
};
