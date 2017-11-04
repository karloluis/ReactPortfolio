import React from 'react';

import { H3, H6, P } from '../components/Typography';

import TitleBlock from '../components/Design/TitleBlock';

const About = () => (
  <div id="about">
    <H3><TitleBlock>About</TitleBlock></H3>
    <H6 style={{ textAlign: 'center' }}>
      Hello, my name is Karlo Martinez and I am a Fullstack Engineer
      based in San Juan, Puerto Rico.
    </H6>

    <P>
      I am fully commited to fullstack development, but my strength lies on the
      back end, where business logic and computation happens most heavily.
    </P>

    <P>
      Also looking for opportunities to grow professionally and collaborate on
      software.
    </P>

    <style jsx>
      {`
        #about {
          padding: 2vh 0;
        }
      `}
    </style>
  </div>
);

export default About;
