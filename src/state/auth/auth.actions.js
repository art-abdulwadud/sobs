/* eslint-disable require-unicode-regexp */
/* eslint-disable prefer-named-capture-group */
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

export const signUp = (inputs, toast) => {
  return async () => {
    try {
      const { email, password, confirmPassword } = inputs;
      if (password === confirmPassword) {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        toast.current.show({ severity: 'success', summary: `Welcome ${email.match(/^([^@]*)@/)[1]}!`, detail: 'Just a sec, setting up your account', life: 3000 });
        setTimeout(() => navigate('/'), 2000);
      } else {
        toast.current.show({ severity: 'error', summary: 'Failed login', detail: 'Passwords don\'t match', life: 3000 });
      }
    } catch (error) {
      toast.current.show({ severity: 'error', summary: 'Failed login', detail: error.message, life: 3000 });
      console.log(error.message);
    }
  };
};

export const login = (inputs, toast) => {
  return async (dispatch) => {
    try {
      const { email, password } = inputs;
      dispatch(checkUser({}));
      await firebase.auth().signInWithEmailAndPassword(email, password);
      toast.current.show({ severity: 'success', summary: `Welcome back ${email.match(/^([^@]*)@/)[1]}`, detail: 'Just a sec...', life: 3000 });
      setTimeout(() => navigate('/'), 500);
    } catch (error) {
      toast.current.show({ severity: 'error', summary: 'Failed login', detail: error.message, life: 3000 });
      console.log(error.message);
    }
  };
};
