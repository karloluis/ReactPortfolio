import React from 'react';

import { H3, P } from '../components/Typography';
import TitleBlock from '../components/Design/TitleBlock';

const Code = () => (
  <div id="code">
    <H3><TitleBlock>Code</TitleBlock></H3>
    <div id="code__content" >

      <P>
        I work with many different technologies and tools which you can see bellow.
        Some might not be listed so check out my LinkedIn or Github to see what
        else I have worked with in the past.
      </P>

      <P>
        Always looking for new opportunities to learn and collaborate.
      </P>

    </div>
    <style jsx>
      {`
        #code {
          padding: 2vh 0;
        }
      `}
    </style>
  </div>
);

export default Code;
