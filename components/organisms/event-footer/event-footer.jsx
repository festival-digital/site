import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import buildClass from 'utils/buildClass';

const FooterSticky = styled.footer`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.neutralColor[7]};
  box-shadow: 0px -2px 0px #000000;
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.sm} ${theme.borderRadius.sm} 0 0`};
  padding: ${({ theme: { spacingInset } }) =>
    `${spacingInset.xs} ${spacingInset.xs}`};
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition: all 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035);

  &.isScrolled {
    position: sticky;
    bottom: 0;
    animation-name: onStickyEnter;
  }

  &.isNotScrolled {
    position: sticky;
    bottom: -100%;
  }

  @keyframes onStickyEnter {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const ButtonFooter = styled.button`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.neutralColor[1]};
  background: linear-gradient(180deg, #ea5ebf 0%, #8740c6 100%, #8740c6 100%);
  border: 2px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px #000000;
  border-radius: ${({ theme }) => `${theme.borderRadius.sm}`};
  padding: ${({ theme: { spacingInset } }) =>
    `${spacingInset.xs} ${spacingInset.xs}`};
`;

const EventFooter = ({ handleClick }) => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);
  const handleScroll = () => {
    if (stickyRef.current && window) {
      if (window.scrollY > 220) {
        setIsSticky(true);
      } else if (window.scrollY === 0) setIsSticky(false);
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
    <FooterSticky
      className={buildClass({ isScrolled: isSticky, isNotScrolled: !isSticky })}
      ref={stickyRef}
    >
      <ButtonFooter onClick={handleClick}>
        Adquirir ingresso gratuito{' '}
      </ButtonFooter>
    </FooterSticky>
  );
};

export default EventFooter;
