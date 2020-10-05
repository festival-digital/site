import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import buildClass from 'utils/buildClass';

const Nav = styled.nav`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  position: relative;
  background-image: url('/static/images/event_header_no_scroll.png');
  background-size: 100% auto;
  z-index: 100;
  height: ${({ maxHeight }) => `${maxHeight}px`};
  animation-duration: 0.3s;
  animation-name: increase;
  transition: height 0.3s;

  &.scrolled {
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    position: sticky;
    top: 0px;
    height: ${({ height }) => `${height}px`};
    animation-name: decrease;
  }

  @keyframes increase {
    from {
      height: ${({ height }) => `${height}px`};
    }
    to {
      height: ${({ maxHeight }) => `${maxHeight}px`};
    }
  }

  @keyframes decrease {
    from {
      height: ${({ maxHeight }) => `${maxHeight}px`};
    }
    to {
      height: ${({ height }) => `${height}px`};
    }
  }
`;

const LinearBackground = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(0deg, #1d1d1d 40.21%, rgba(29, 29, 29, 0) 100%);
  padding: ${({ theme: { spacingInset } }) =>
    `${spacingInset.xs} ${spacingInset.xs}`};
  z-index: 100;

  &.scrolled {
    padding: ${({ theme: { spacingInset } }) =>
      `${spacingInset.xs} ${spacingInset.xs}`};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75);

    z-index: 100;
  }
`;

const MainButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 5px;
  border: 2px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px #000000;
  border-radius: 10px;
  background: linear-gradient(180deg, #ea5ebf 0%, #8740c6 100%, #8740c6 100%);
  margin-right: ${({ theme }) => theme.spacingInline.xxxs};
  overflow: hidden;
  cursor: pointer;
  z-index: 100;
`;
const MainButtonImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/static/images/platdig-idv-concepts-avatar2.png');
  background-size: cover;
  box-shadow: none;
`;

const OasiLogo = styled.img`
  height: 20px;
  z-index: 100;
`;

const EventHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);
  const headerHeight = 80;
  const headerMaxHeight = 120;

  const handleScroll = () => {
    if (stickyRef.current && window) {
      if (window.scrollY > stickyRef.current.getBoundingClientRect().top) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
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
      className={buildClass({ scrolled: isSticky })}
      ref={stickyRef}
      height={headerHeight}
      maxHeight={headerMaxHeight}
    >
      <LinearBackground className={buildClass({ scrolled: isSticky })}>
        <MainButton>
          <MainButtonImage />
        </MainButton>
        <OasiLogo src="/static/icons/oasis-logo2.svg" alt="Logo escrito Oasi" />
      </LinearBackground>
    </Nav>
  );
};

export default EventHeader;
