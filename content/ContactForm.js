import React from 'react';

import { COLORS, TYPOGRAPHY, TEXTSIZE } from '../lib/styles';

import { H3, H4, H6 } from '../components/Typography';
import TitleBlock from '../components/Design/TitleBlock';

const ContactForm = () => (
  <div id="contact">
    <div id="contact__content" >

      <H3 light><TitleBlock light>Contact me</TitleBlock></H3>
      <form action="https://formspree.io/contact@karloluis.com"
        method="POST"
      >
        <div className="form__head">
          <div>
            <H6 light >Email:</H6>
            <input className="form-control form__entry" type="email" name="_replyto" placeholder="Your Email" />
          </div>

          <div>
            <H6 light >Subject:</H6>
            <input className="form-control form__entry" type="text" name="_subject" placeholder="Subject" />
          </div>
        </div>

        <H6 light >Message</H6>
        <textarea className="form-control" rows="5" name="body" placeholder="Your Message..." />
        <input className="form__button" type="submit" value="Send" style={{ alignSelf: 'flex-end' }} />
      </form>

      <hr style={{ width: '60%', border: `${COLORS.shaders.darker} inset 1px`, marginBottom: '2px' }} />

      <H4 light>Looking more?</H4>
      <div id="resume">
        <a href="/static/files/resume.pdf" target="_blank">Download my Resume</a>
      </div>

    </div>
    <style jsx>
      {`
        #contact {
          padding: 5vh 0;
          width: 100%;
        }

        #contact__content {
          display: flex;
          flex-flow: column;
          align-items: center;


          width: 100%;
          height: 100%;
        }

        form {
          display: flex;
          flex-flow: column nowrap;
          align-items: flex-start;
          width: 45%
          margin: 14px 0 24px 0;
        }

        .form__head {
          display: flex;
          flex-flow: row nowrap;
        }

        .form__entry {
          width: 70%;
        }

        form textarea {
          width: 90%;
        }

        .form__button {
          border: none;
          border-radius: 10%;

          margin-right: 5%;
          padding: 12px 32px;

          color: ${COLORS.texts.light};
          background-color: ${COLORS.palette.primary};

          font-family: ${TYPOGRAPHY.input};
          font-size: 1.4rem;
        }

        .form__button:hover {
          background-color: ${COLORS.shaders.primary};
        }

        .form-control {
          margin: 12px;
          font-family: ${TYPOGRAPHY.header.subtitle};
          font-size: 1.2rem;
          padding: 8px 12px;
        }

        #resume {
          border-radius: 10%;
          background-color: ${COLORS.palette.secundary}

          margin: 4vmin 0 2vmin 0;

          padding: 2%;
        }

        #resume a {
          color: ${COLORS.palette.primary};
          font-size: ${TEXTSIZE.lg};

          text-decoration: none;
        }
      `}
    </style>
  </div>
);

export default ContactForm;
