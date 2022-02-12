import React, { useState } from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby-link';
import { InputText } from 'primereact/inputtext';
import RoundBtn from '../buttons/RoundBtn';
import animateCSS from '../animate';
import { signUp } from '../../state/auth/auth.actions';

const isBrowser = typeof window !== 'undefined';

const SignUpForm = ({ toast, signUp }) => {
  const [inputs, setInputs] = useState({});
  const sendUserInfoToDatabase = async (event) => {
    try {
      event.preventDefault();
      if (isBrowser && typeof document !== 'undefined') {
        document.querySelector('#sign-up-btn').style.animationDuration = '3s';
        animateCSS('#sign-up-btn', 'hinge', () => animateCSS('#sign-up-btn', 'fadeInUpBig'));
        await signUp(inputs, toast);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form className="d-flex column w-100 center linear-bg h-100vh" onSubmit={sendUserInfoToDatabase}>
      <div className="w-full p-4" style={{ background: 'transparent', boxShadow: 'none !important' }}>
        <div className="mb-5 text-center">
          <div className="text-900 text-3xl font-medium mb-3 text-white">Sign Up</div>
          <span className=" font-medium line-height-3 text-white">Already have an account?</span>
          <a className="font-medium no-underline ml-2 cursor-pointer dark-c-h" onClick={() => navigate('/login')}>Log in!</a>
        </div>
        <div>
          <label htmlFor="name" className="block text-900 mb-2 text-white f3">Full Name</label>
          <InputText type="text" id="name" className="w-full mb-3" onChange={(ev) => setInputs({ ...inputs, name: ev.target.value })} required={true} />
          <label htmlFor="email" className="block text-900 mb-2 text-white f3">Email</label>
          <InputText type="email" id="email" className="w-full mb-3" onChange={(ev) => setInputs({ ...inputs, email: ev.target.value })} required={true} />
          <label htmlFor="password" className="block text-900 mb-2 text-white f3">Password</label>
          <InputText type="password" id="password" className="w-full mb-3" onChange={(ev) => setInputs({ ...inputs, password: ev.target.value })} required={true} />
          <label htmlFor="confirm-password" className="block text-900 mb-2 text-white f3">Confirm Password</label>
          <InputText type="password" id="confirm-password" className="w-full mb-3" onChange={(ev) => setInputs({ ...inputs, confirmPassword: ev.target.value })} required={true} />
          <div className="d-flex center w-100">
            <RoundBtn type="submit" text="Sign Up" name="sign-up-btn" />
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  toast: state.auth.toast
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (inputs, toast) => dispatch(signUp(inputs, toast))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
