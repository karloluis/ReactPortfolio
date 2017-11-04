import React from 'react';

import CoverBackground from '../components/Design/CoverBackground';

import Navigation from '../components/Navigation/NavigationBar';
import SocialNav from '../components/SocialNav/SocialNav';

import About from '../content/About';
import Blogging from '../content/Blogging';
import Code from '../content/Code';
import Hobbies from '../content/Hobbies';
import ContactForm from '../content/ContactForm';

import { COLORS, SPACING } from '../lib/styles';

const Home = () => {
  return (
    <div>
      <span id="navigation" className="anchorOffset" />
      <Navigation />
      <SocialNav />

      <div className="contentBlock">
        <span id="about" className="anchorOffset" />
        <About />
      </div>

      <CoverBackground image="monochrome-bench.jpeg" shader={COLORS.shaders.primary}>
        <div className="contentBlock">
          <span id="blogging" className="anchorOffset" />
          <Blogging light/>
        </div>
      </CoverBackground>

      <div className="contentBlock">
        <span id="code" className="anchorOffset" />

        <Code />
      </div>

      <div className="contentBlock">
        <span id="hobbies" className="anchorOffset" />

        <Hobbies />
      </div>

      <CoverBackground image="wood-falling.jpeg" shader={COLORS.shaders.secundary}>
          <span id="contact" className="anchorOffset" />
          <ContactForm light/>
      </CoverBackground>

      <style jsx>
        {`
          .anchorOffset {
            display: block;
            position: relative;
            top: -20px;
            visibility: hidden;
          }

          .contentBlock {
            margin: 1vh 18% 2vh 18%;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
