import React, { FunctionComponent } from 'react';
import { Link as GLink, GatsbyLinkProps } from 'gatsby';
import styled from '@emotion/styled';
import { Font } from '../styles/theme';

interface LinkProps {
  font?: Font;
}

const StyledLink = styled.a<LinkProps>`
  font-family: ${({ theme, font = 'sans' }): string => theme.fonts[font]};
  background-color: white;
  color: black;
  :hover {
    background-color: black;
    color: white;
  }
  text-decoration: underline;
`;

const StyledGLink = StyledLink.withComponent(GLink);

const Link: FunctionComponent<GatsbyLinkProps<{ font?: string }>> = ({
  to,
  children,
  activeClassName,
  // ref here to fix ts error with gatsby link interface
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
  // inputMode here to fix ts error with gatsby link interface
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  inputMode,
  ...other
}) => {
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
