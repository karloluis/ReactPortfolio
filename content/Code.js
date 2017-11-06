import React from 'react';

import { H3, H6, P, Link } from '../components/Typography';
import TitleBlock from '../components/Design/TitleBlock';

const Code = () => (
  <div id="code">
    <H3><TitleBlock>Code</TitleBlock></H3>
    <div className="code__content" >

      <P>
        I work with many different technologies and tools which you can see bellow.
        Some might not be listed so check out my
        <Link href="https://www.linkedin.com/in/karloluis/" > LinkedIn </Link>
        or
        <Link href="https://github.com/karloluis" > Github </Link> to see what
        else I have worked with in the past.
      </P>

      <P>
        Always looking for new opportunities to learn and collaborate.
      </P>
    </div>

    <H6><TitleBlock>Tech</TitleBlock></H6>
    <div className="code__content" >
      <P>
        There are a tools and languages that I have come to rely on heavily.
        Listed bellow are those that I am most familiar with and proficient in.
        Most of which I use daily to be productive and do some amazing work.
      </P>

    </div>

    <div id="code__tech">
      <img className="code__tech--image" src="/static/images/loader-reverse.svg"/>
      <img className="code__tech--image" src="/static/images/loader-reverse.svg"/>
      <img className="code__tech--image" src="/static/images/loader-reverse.svg"/>
      <img className="code__tech--image" src="/static/images/loader-reverse.svg"/>
      <img className="code__tech--image" src="/static/images/loader-reverse.svg"/>
      <img className="code__tech--image" src="/static/images/loader-reverse.svg"/>
    </div>

    <div className="code__content">
      <P>
        Feel free to also check out the code for this
        <Link href="https://github.com/karloluis/ReactPortfolio" > website</Link>.
      </P>
    </div>

    <style jsx>
      {`
        #code {
          padding: 0vh 0;
        }

        #code__tech {
          margin: 2vh auto;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          width: 40vw;
        }

        .code__tech--image {
          margin: 3vmin;
          height: 10vmin;
          width: 10mvin;
        }
      `}
    </style>
  </div>
);

export default Code;
