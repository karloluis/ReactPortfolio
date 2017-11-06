import PropTypes from 'prop-types';
import React from 'react';

import { COLORS, TEXTSIZE } from '../../lib/styles';

const Link = ({ href, target, children, download, media, rel, type, style }) => {
  return (
    <a
      href={href}
      target={target}
      // download={download}
      media={media}
      rel={rel}
      type={type}
      style={style}
    >
      {children}
      <style>{`
        a {
          color: ${COLORS.links.normal};
          text-decoration: none;
        }
        a:hover {
          color: ${COLORS.links.hover}
        },
        a:active, a:focus {
          color: ${COLORS.links.active}
        },
        `}
      </style>
    </a>
  );
};

export default Link;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node,
  download: PropTypes.string,
  media: PropTypes.string,
  rel: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
};

Link.defaultProps = {
  children: undefined,
  target: '',
  download: '',
  media: '',
  rel: '',
  type: '',
  style: {},
};
