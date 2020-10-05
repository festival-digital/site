import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import buildClass from 'utils/buildClass';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import {
  Nav, LinearBackground, MainButton, MainButtonImage,
  OasiLogo,
} from './event-header.style';

const EventHeader = ({ backgroundURI, goBackMode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);

  const handleScroll = () => {
    if (stickyRef.current && window) {
      if (window.scrollY > 220) {
        setIsSticky(true);
      } else {
        if (window.scrollY === 0) setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav
      ref={stickyRef}
      isSticky={isSticky}
      backgroundURI={backgroundURI}
    >
      <LinearBackground
        isSticky={isSticky}
      >
        {
          goBackMode ? (
            <GoBackButton />
          ) : (
            <>
              <MainButton>
                <MainButtonImage />
              </MainButton>
              <OasiLogo src="/static/icons/oasis-logo.svg" alt="Logo escrito Oasi" />
            </>
          )
        }
      </LinearBackground>
    </Nav>
  );
};

EventHeader.propTypes = {
  backgroundURI: PropTypes.string,
  goBackMode: PropTypes.bool,
};

EventHeader.defaultProps = {
  backgroundURI: '/static/images/event_header_no_scroll.png',
  goBackMode: false,
};

export default EventHeader;
