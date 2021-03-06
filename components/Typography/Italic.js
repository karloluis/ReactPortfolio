import React from 'react';
import PropTypes from 'prop-types';

const Italic = ({ children }) => (
  <span>
    {children}
    <style jsx>
      {`
        span {
          font-style: italic;
        }
      `}
    </style>
  </span>
);

Italic.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Italic;
