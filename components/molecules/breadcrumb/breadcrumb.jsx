import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Link from 'next/link';
import { Wrapper, LinkText, LinkWrapper } from './breadcrumb.style';

const renderLinks = ({ options }) => options.map(({ href, label }) => (
  <LinkWrapper>
    <Link href={href} key={href}>
      <LinkText>{label}</LinkText>
    </Link>
    <span>
      <Icon>keyboard_arrow_right</Icon>
    </span>
  </LinkWrapper>
));

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Breadcrumb = ({ options }) => (
  <Wrapper>
    {renderLinks({ options })}
  </Wrapper>
);

Breadcrumb.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
};

Breadcrumb.defaultProps = {
  options: [],
};

export default Breadcrumb;
