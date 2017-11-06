import React from 'react';

import { H3, H6, P, Link } from '../components/Typography';
import TitleBlock from '../components/Design/TitleBlock';

const Blogging = () => (
  <div id="blogging">
    <H3 light><TitleBlock light>Blogging</TitleBlock></H3>
    <H6 light>Tech, Software, and Career Building articles.</H6>
    <div id="blogging__content" >
      <P light>
        After years of being self-concious about my writting skills I
        overcame the fear and now write about technology and
        software development.
      </P>

      <P light>
        You can find my posts on <Link href="https://medium.com/@karloluis/latest">Medium</Link>.
      </P>
    </div>
    <style jsx>
      {`
        #blogging {
          padding: 0vh 0;
        }
      `}
    </style>
  </div>
);

export default Blogging;
