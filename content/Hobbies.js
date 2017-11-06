import React from 'react';

import { H3, P } from '../components/Typography';
import TitleBlock from '../components/Design/TitleBlock';

const Hobbies = () => (
  <div id="hobbies">
    <H3><TitleBlock>Hobbies</TitleBlock></H3>
    <div id="hobbies__content" >

      <P>
        When I am not in front of the keyboard I like to keep active and
        moving around.

        Most days I work out at my local gym, whenever possible
        grab my bicycle and cruise around or commute to nearby shops.

        But my favorite form of exercise is definitely water polo.
      </P>

      <P>
        I also like making myself useful in the kitchen cooking healthy recipes
        and trying new ingredients to make it a special occasion every time.
      </P>

    </div>
    <style jsx>
      {`
        #hobbies {
          padding: 0vh 0;
        }
      `}
    </style>
  </div>
);

export default Hobbies;
