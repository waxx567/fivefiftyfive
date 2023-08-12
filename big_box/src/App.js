import React from 'react';

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
      <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
      </div>
  )
}

export default App
