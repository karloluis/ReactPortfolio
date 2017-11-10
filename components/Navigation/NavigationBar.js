import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { H3 } from '../Typography';

import { COLORS, TEXTSIZE, SPACING, TYPOGRAPHY } from '../../lib/styles';

const NavigationBar = () => {
  return (
    <nav id="navbar">
      {/* <div className="navbar__area">
      </div> */}
      <div className="navbar__area">
        <Link href="/">
          <H3>
            <a id="navLogo">
              Karlo Martinez
            </a>
          </H3>
        </Link>
      </div>

      <div className="navbar__area">

        <Link href="#code">
          <a className="navLink">Code</a>
        </Link>

        <Link href="#life">
          <a className="navLink">Life</a>
        </Link>

        <Link href="#projects">
          <a className="navLink">Projects</a>
        </Link>

        <Link href="#contact">
          <a className="navLink">Contact</a>
        </Link>
      </div>

      <style jsx>
        {`
          #navbar {
            top: 0;
            width: calc(100% - 2*${SPACING.xl});
            padding: ${SPACING.lg} ${SPACING.xl} ${SPACING.md} ${SPACING.xl};
            font-size: ${TEXTSIZE.nav};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            border: 0;
            border-radius: 0 0 14px 14px;
          }

          .navLink {
            font-family: ${TYPOGRAPHY.header.subtitle};
            display: inline-block;
            margin: ${SPACING.md} ${SPACING.xs};
            padding: ${SPACING.xs} ${SPACING.xs} 4px ${SPACING.xs};
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;

            font-size: ${TEXTSIZE.sm};
            color: ${COLORS.texts.light};
            background-color: ${COLORS.palette.primary};

            border: none;
            border-radius: 10%;
          }

          .navLink:hover, .navLink:focus {
            background-color: ${COLORS.palette.secundary};
            color: ${COLORS.texts.dark};
          }

          #navLogo {
            font-family: ${TYPOGRAPHY.header.subtitle};
            display: inline-block;
            margin: ${SPACING.md} ${SPACING.xs};
            padding: ${SPACING.xs} ${SPACING.xs} 4px ${SPACING.xs};
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;

            color: ${COLORS.texts.light};
            background-color: ${COLORS.palette.primary};

            border: none;
            border-radius: 10%;
          }
       `}
      </style>
    </nav>
  );
};

export default NavigationBar;
