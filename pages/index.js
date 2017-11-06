import React from 'react';

import CoverBackground from '../components/Design/CoverBackground';

import Navigation from '../components/Navigation/NavigationBar';
import SocialNav from '../components/SocialNav/SocialNav';

import About from '../content/About';
import Blogging from '../content/Blogging';
import Code from '../content/Code';
import Projects from '../content/Projects';
import Hobbies from '../content/Hobbies';
import ContactForm from '../content/ContactForm';

import { COLORS, SPACING } from '../lib/styles';

const Home = () => {
  return (
    <div>
      <span id="navigation" className="anchorOffset" />
      <CoverBackground image="monochrome-desk.jpg" shader={COLORS.shaders.darker} >
        <Navigation />
        <SocialNav />

        <span id="about" className="anchorOffset" />
        <div className="content__block">
          <About />
        </div>
      </CoverBackground>

      <div className="content__block">
        <span id="code" className="anchorOffset" />

        <Code />
      </div>

      <CoverBackground image="monochrome-bench.jpeg" shader={COLORS.shaders.primary} >
        <div className="content__block">
          <span id="blogging" className="anchorOffset" />
          <Blogging />
        </div>
      </CoverBackground>

      <div className="content__block">
        <span id="projects" className="anchorOffset" />
        <Projects />
      </div>


      <div style={{ height: '15vh' }}>

      </div>

      {/* <div className="content__block">
        <span id="hobbies" className="anchorOffset" />

        <Hobbies />
      </div> */}

      <CoverBackground image="wood-falling.jpeg" shader={COLORS.shaders.secundary} >
        <div className="content__block">
          <span id="contact" className="anchorOffset" />
          <ContactForm />
        </div>
      </CoverBackground>

      <style jsx>
        {`
          .anchorOffset {
            display: block;
            position: relative;
            top: -20px;
            visibility: hidden;
          }

          .content__block {
            margin: 0 18% 0 18%;
            padding: 3vh 0 3vh 0;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
