import React from 'react';

import { COLORS } from '../lib/styles';

import { H3, H5, P, Link } from '../components/Typography';
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

    <div id="tech">
      <H5><TitleBlock>Tech</TitleBlock></H5>
      <div className="code__content" >
        <P>
          There are a tools and languages that I have come to rely on heavily.
          Listed bellow are those that I am most proficient and familiar with.
          Most of which I use daily to be productive and do some amazing work.
        </P>
      </div>
    </div>

    <div id="code__tech">
      <i className="devicon-javascript-plain code__tech--image" />
      <i className="devicon-python-plain-wordmark code__tech--image" />
      <i className="devicon-nodejs-plain-wordmark code__tech--image" />
      <i className="devicon-express-original-wordmark code__tech--image" />
      <img className="" src="/static/images/nextjs.svg" alt="nextjs" style={{ width: '12vmin' }} />
      <i className="devicon-react-original-wordmark code__tech--image" />
      <i className="devicon-mongodb-plain-wordmark code__tech--image" />
      <img className="" src="/static/images/graphql.svg" alt="nextjs" style={{ width: '9vmin' }} />
      <i className="devicon-sass-original code__tech--image" />
      <i className="devicon-git-plain-wordmark code__tech--image" />
      <i className="devicon-heroku-line-wordmark code__tech--image" />
      <i className="devicon-atom-original-wordmark code__tech--image" />
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

        #tech {
          margin: 4vh 0;
        }

        #code__tech {
          margin: 2vh auto;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          align-items: center;


          font-size: 83px;
          color: #7C7F7D;
        }

        .code__tech--image {
          margin: 3vmin 4vmin;
        }
      `}
    </style>
  </div>
);

export default Code;
