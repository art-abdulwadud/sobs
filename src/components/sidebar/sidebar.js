const initialState = {
  showSidebar: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'showSidebar':
      return {
        ...state,
        showSidebar: action.showSidebar
      };
    default:
      return state;
  }
};
