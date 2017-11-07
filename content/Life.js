import React from 'react';

import { H3, H5, H6, P, Link } from '../components/Typography';
import TitleBlock from '../components/Design/TitleBlock';

const Life = () => (
  <div id="life">

    <H3><TitleBlock light>Life</TitleBlock></H3>
    <div id="life__content" >

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

    </div>

    <div id="blog">
      <H5 light><TitleBlock light>Blog</TitleBlock></H5>
      <div className="blog__quote">
        <H6 light style={{ width: '60%', margin: '0 auto', textAlign: 'center' }}>
          Tech, Software, and Career Building articles.
        </H6>
      </div>
      <div id="blog__content" >
        <P light>
          After years of being self-concious about my writting skills I
          overcame the fear and now write about technology and
          software development.
        </P>

        <P light>
          You can find my posts on <Link href="https://medium.com/@karloluis/latest">Medium</Link>.
        </P>
      </div>
    </div>

    <style jsx>
      {`
        #life {
          padding: 0vh 0;
        }

        #blog {
          margin: 4vh 0;
        }

        .blog__quote {
          margin: 2vh 0;
        }
      `}
    </style>
  </div>
);

export default Life;
