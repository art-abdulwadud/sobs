import React from 'react';
import img from '../../images/setup-illustration.svg';
import SignUpForm from './SignUpForm';

const SignUp = () => {
  return (
    <div className="login d-flex w-100" style={{ backgroundImage: 'background: linear-gradient(rgb(65, 137, 221), rgb(145, 152, 229))' }}>
      <div className="heading" style={{ zIndex: '2', flex: '1 1 45%' }}>
        <div className="position-absolute ball-one ball text-left"></div>
        <div className="d-flex p-3 w-100" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src={img} alt="" width="350" height="300"/><br/>
          <div className="d-flex" style={{ flexDirection: 'column', justifyContent: 'left' }}>
            <h1 className="f1" style={{ fontSize: '2.5em', color: 'rgb(65, 137, 221)' }}>Somali Bureau of <br/>Standards.</h1>
            <p className="f3 intro-sub-heading p-1">Establishing robust Qualiy Infrastructure (QI) for Somalia.</p>
          </div>
        </div>
      </div>
      <div style={{ zIndex: '1', flex: '1 1 45%', minHeight: '100vh' }}><SignUpForm /></div>
    </div>
  );
};

export default SignUp;
