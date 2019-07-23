import React from 'react';

import { Layout, SEO } from '../../components';
import Header from './components/Header';

import './Home.css';

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="Home">
        <Header />
      </div>
    </Layout>
  );
};

export default Home;
