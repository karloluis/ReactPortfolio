import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from '../../lib/styles';

// Used for decorating titles
const TitleBlock = ({ children, light }) => {
  const color = light ? COLORS.texts.light : COLORS.palette.primary;
  const colorAccent = light ? COLORS.texts.light : COLORS.palette.secundary;
  return (
    <div>
      <span >/</span>
      {children}
      <span >&#62;</span>

      <style jsx>
        {`
          div {
            display: flex;
            felx-flow: row nowrap;
            align-items: center;
            justify-content: center;

            color: ${color};
            line-height: 1.2;
          }

          span {
            color: ${colorAccent};
          }
        `}
      </style>
    </div>
  );
};

TitleBlock.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
};

TitleBlock.defaultProps = {
  light: false,
};

export default TitleBlock;
