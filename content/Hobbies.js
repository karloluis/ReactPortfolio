import React from 'react';

import { H3, P } from '../components/Typography';
import TitleBlock from '../components/Design/TitleBlock'

import { COLORS, TYPEOGRAPHY, TEXTSIZE } from '../lib/styles';

const Hobbies = () => (
  <div id="hobbies">
    <H3><TitleBlock>Hobbies</TitleBlock></H3>
    <div id="hobbies__content" >

      <P>
        When I am not in front of the keyboard I like to keep active and
        moving around.

        Most days I work out at my local gym, whenever possible
        grab my bicicle and cruise around or commute to nearby shops.

        But my favorite form of excercise is definitely water polo, it is a
        challenging sport that relies on technique and physicality as well as
        teamwork.
      </P>

    </div>
    <style jsx>
      {`
        #hobbies {
          padding: 2vh 0;
        }
      `}
    </style>
  </div>
);

export default Hobbies;
