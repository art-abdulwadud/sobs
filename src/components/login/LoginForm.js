/* eslint-disable max-statements */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby-link';
import { InputText } from 'primereact/inputtext';
import animateCSS from '../animate';
import RoundBtn from '../buttons/RoundBtn';
import { login } from '../../state/auth/auth.actions';

const isBrowser = typeof window !== 'undefined';

const LoginForm = ({ toast, login }) => {
  const [inputs, setInputs] = useState({});
  const sendUserInfoToDatabase = async (event) => {
    try {
      event.preventDefault();
      if (isBrowser && typeof document !== 'undefined') {
        document.querySelector('#login-btn').style.animationDuration = '3s';
        animateCSS('#login-btn', 'hinge', () => animateCSS('#login-btn', 'fadeInUpBig'));
        await login(inputs, toast);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className="d-flex column w-100 p-5 center linear-bg h-100vh" onSubmit={sendUserInfoToDatabase}>
      <div className="surface-card p-4 border-round w-full no-box-shadow" style={{ background: 'transparent' }}>
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3 text-white">Conformity Assessment Portal</div>
          <span className=" font-medium line-height-3 text-white">{"Don't"} have an account?</span>
          <a className="font-medium no-underline ml-2 cursor-pointer dark-c-h" onClick={() => navigate('/signup')}>Create today!</a>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 mb-2 text-white f3">Email</label>
          <InputText type="text" id="email" className="w-full mb-3" onChange={(ev) => setInputs({ ...inputs, email: ev.target.value })} required={true} />

          <label htmlFor="password" className="block text-900 mb-2 text-white f3">Password</label>
          <InputText type="password" id="password" className="w-full mb-3" onChange={(ev) => setInputs({ ...inputs, password: ev.target.value })} required={true} />
          <div className="flex align-items-center justify-content-between mb-6">
            <a className="no-underline text-white text-right cursor-pointer white-c-h f3">Forgot password?</a>
          </div>
          <div className="d-flex center w-100" style={{ marginTop: '-40px' }}>
            <RoundBtn type="submit" text="Login" name="login-btn" />
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
  login: (inputs, toast) => dispatch(login(inputs, toast))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
