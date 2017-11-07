import React from 'react';

import { H3, H6, P } from '../components/Typography';

import TitleBlock from '../components/Design/TitleBlock';

const About = () => (
  <div id="about">

    <H3 light><TitleBlock light>About</TitleBlock></H3>
    <div className="about__quote">
      <img id="clip" src="/static/images/Me_.jpg" alt="Karlo Martinez" />
      <div className="about__quote--content" >
        <H6 style={{ textAlign: 'center' }} light>
          Hello, my name is Karlo Martinez and I am a Fullstack Engineer
          based in San Juan, Puerto Rico.
        </H6>
      </div>
    </div>

    <P light>
      I am fully commited to fullstack development, but my strength lies on the
      back end, where business logic and computation happens most heavily.
    </P>

    <P light>
      Also looking for opportunities to grow professionally and collaborate on
      software.
    </P>

    <style jsx>
      {`
        #about {
          padding: 2vh 0;
        }

        .about__quote {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-around;
          margin: 5vh 0;
        }

        .about__quote--content {
          width: 60%;
        }

        #clip {
          width: 30%;
          border-radius: 47%;
          transform: scaleX(-1);
        }
      `}
    </style>
  </div>
);

export default About;
