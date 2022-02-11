import { navigate } from 'gatsby-link';
import firebase from 'gatsby-plugin-firebase';

export const checkUser = (user) => ({
  type: 'check_user', user
});

export const addProfile = (profile) => ({
  type: 'profile', profile
});

export const checkPageLoading = (pageLoading) => ({
  type: 'page_loading', pageLoading
});

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(checkUser({}));
      await firebase.auth().signOut();
      setTimeout(() => navigate('/'), 500);
    } catch (error) {
      console.log(error.message);
    }
  };
};
