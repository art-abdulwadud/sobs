import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import SignUp from '../components/signup/SignUp';

const signup = () => {
  return (
    <Layout>
      <Seo title="Sign Up" />
      <SignUp />
    </Layout>
  );
};

export default signup;
