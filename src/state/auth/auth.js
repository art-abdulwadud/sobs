const initialState = {
  user: {},
  profile: {},
  pageLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'check_user':
      return {
        ...state,
        user: action.user
      };
    case 'profile':
      return {
        ...state,
        profile: action.profile
      };
    case 'page_loading':
      return {
        ...state,
        pageLoading: action.pageLoading
      };
    default:
      return state;
  }
};
