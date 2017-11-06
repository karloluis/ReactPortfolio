import React from 'react';

import { H3, H5, H6, P, Link, Italic } from '../components/Typography';
import TitleBlock from '../components/Design/TitleBlock';

import { COLORS } from '../lib/styles';

const Projects = () => (
  <div id="projects">
    <H3><TitleBlock>Recent Works</TitleBlock></H3>

    <div className="project__entry">
      <div className="project__entry--head">
        <Link href="http://aptogen.herokuapp.com" target="_blank">
          <H5 style={{  }} >AptoGen</H5>
        </Link>
      </div>
      <div className="project__entry--content">
        <P>
          AptoGen is a freelance and consulting services brand for entrepenuers.
        </P>

        <P>
          Visit AptoGen services
          <Link href="http://sexycandies.co"> website </Link>
          and see if we are a good fit for your project or venture.
        </P>
      </div>
    </div>

    <div className="project__entry">
      <div className="project__entry--head">
        <Link href="http://sexycandies.co" target="_blank">
          <H5 style={{ fontFamily: 'Great Vibes', color: '#b90000' }}>Sexy Candies</H5>
        </Link>
      </div>
      <div className="project__entry--content">
        <P>
          Somart Martos is a Puerto Rican pastry chef that creates delicious
          works of art. She makes every occasion ellegant with her top quality
          products.
        </P>

        <P>
          Visit her
          <Link href="http://sexycandies.co"> website </Link>
          and pick something sweet for yourself; heads up, it&#39;s in Spanish.
        </P>
      </div>
    </div>

    <div className="project__entry">
      <div className="project__entry--head">
        <Link href="#" target="_blank">
          <H5>Distribuidora Boricua</H5>
        </Link>
        <H6 style={{ color: COLORS.links.normal }} ><Italic>Coming Soon!</Italic></H6>
      </div>

      <div className="project__entry--content">
        <P>
          Angel Luis is a self made businessman, started selling items back in college.
          Now owns his business and runs a local shop in downtown Río Piedras.
        </P>

        {/* <P>
          Visit Distribuidora Boricua's
          <Link href="#"> website </Link> or
          <Link href="#"> Facebook Page </Link>.
        </P> */}
      </div>

    </div>

    <style jsx>
      {`
        .project__entry--head {
          display: flex;
          flex-flow: row nowrap;

          justify-content: space-between;
        }

      `}
    </style>
  </div>
);

export default Projects
