import React from 'react';

import { H3, H6, P } from '../components/Typography';

import TitleBlock from '../components/Design/TitleBlock';

const About = () => (
  <div id="about">
    <H3 light><TitleBlock light>About</TitleBlock></H3>
    <H6 style={{ textAlign: 'center' }} light>
      Hello, my name is Karlo Martinez and I am a Fullstack Engineer
      based in San Juan, Puerto Rico.
    </H6>

    <P light>
      I am fully commited to fullstack development, but my strength lies on the
      back end, where business logic and computation happens most heavily.
    </P>

    <P light>
      Also looking for opportunities to grow professionally and collaborate on
      software.
    </P>

    <P light>
      When I am not in front of the keyboard I like to keep active and
      moving around.

      Most days I work out at my local gym, whenever possible
      grab my bicycle and cruise around or commute to nearby shops.

      But my favorite form of exercise is definitely water polo.
    </P>

    <P light>
      I also like making myself useful in the kitchen cooking healthy recipes
      and trying new ingredients to make it a special occasion every time.
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
