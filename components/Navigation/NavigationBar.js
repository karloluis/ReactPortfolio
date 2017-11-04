import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { H3 } from '../Typography';

import { COLORS, TEXTSIZE, SPACING, TYPOGRAPHY } from '../../lib/styles';

const NavigationBar = () => {
  return (
    <nav id="navbar">
      <div className="navbar__area">

      </div>
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
        <Link href="#about">
          <a className="navLink">About</a>
        </Link>

        <Link href="#code">
          <a className="navLink">Code</a>
        </Link>

        <Link href="#blogging">
          <a className="navLink">Blogging</a>
        </Link>

        <Link href="#hobbies">
          <a className="navLink">Hobbies</a>
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
            padding: ${SPACING.xl} ${SPACING.xl} ${SPACING.md} ${SPACING.xl};
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
          }

          img {
            border-radius: 30%;
          }
       `}
      </style>
    </nav>
  );
};

export default NavigationBar;
