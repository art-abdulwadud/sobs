import React from 'react';
import ApplicationOptions from '../components/inspection/ApplicationOptions';
import Layout from '../components/layout';
import NavBar from '../components/navbar/NavBar';
import Seo from '../components/seo';

const inspection = () => {
  return (
    <Layout>
      <Seo title="Inspection" />
      <NavBar />
      <ApplicationOptions />
    </Layout>
  );
};

export default inspection;
