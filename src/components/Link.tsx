import React, { ReactElement } from 'react';
import { Link as gLink } from 'gatsby';
import styled from '@emotion/styled';

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const StyledGLink = StyledLink.withComponent(gLink);

const Link = ({ to, children, activeClassName, ...other }): ReactElement => {
  const internal = /^\/(?!\/)/.test(to);
  const file = /\.[0-9a-z]+$/i.test(to);

  if (internal) {
    if (file) {
      return (
        <StyledLink href={to} {...other}>
          {children}
        </StyledLink>
      );
    } else {
      return (
        <StyledGLink to={to} activeClassName={activeClassName} {...other}>
          {children}
        </StyledGLink>
      );
    }
  } else {
    return (
      <StyledLink href={to} {...other}>
        {children}
      </StyledLink>
    );
  }
};

export default Link;
