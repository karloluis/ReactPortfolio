import React from 'react';

import { COLORS } from '../../lib/styles';

const SocialNav = () => (
  <div id="socialBlock">
    <a href="mailto:contact@karloluis.com" target="_blank" >
      <i className="fa fa-envelope-o" aria-hidden="true" />
    </a>
    <a href="https://medium.com/@karloluis/latest" target="_blank" >
      <i className="fa fa-medium" aria-hidden="true" />
    </a>
    <a href="https://www.linkedin.com/in/karloluis/" target="_blank">
      <i className="fa fa-linkedin-square" />
    </a>
    <a href="https://github.com/karloluis" target="_blank">
      <i className="fa fa-github" />
    </a>
    <a href="https://twitter.com/karloluism" target="_blank">
      <i className="fa fa-twitter" />
    </a>
    <a href="https://open.spotify.com/user/12120215094/playlist/2ZzuzvqtLgnWL18rXBpZwb" target="_blank">
      <i className="fa fa-spotify" />
    </a>

    <style jsx>
      {`
        #socialBlock {
          position: fixed;
          top: 40%;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;

          padding: 10px 28px 10px 12px
          background-color ${COLORS.palette.secundary};

          border-radius: 0 50% 50% 0;
        }

        i {
          font-size: 2rem;
          color: ${COLORS.palette.primary};
        }

        i:hover {
          text-shadow: ${COLORS.palette.secundary} -1px 0px;
        }

      `}
    </style>
  </div>
);

export default SocialNav;
