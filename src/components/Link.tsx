import React, { FunctionComponent, useState } from 'react';
import { Link as GLink, GatsbyLinkProps } from 'gatsby';
import styled from '../styles/styled';

interface LinkProps {
  font?: string;
  hover: boolean;
}

const StyledLink = styled.a<LinkProps>`
  font-family: ${({ theme, font = 'sans' }): string => theme.fonts[font]};
  background-color: ${({ hover }): string => (hover ? 'black' : 'white')};
  color: ${({ hover }): string => (!hover ? 'black' : 'white')};
  transition: all ease-in-out 200ms;
  text-decoration: none;
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
  const [hover, setHover] = useState(false);
  if (internal) {
    if (file) {
      return (
        <StyledLink
          onMouseEnter={(): void => {
            setHover(true);
          }}
          onMouseLeave={(): void => {
            setHover(false);
          }}
          hover={hover}
          href={to}
          {...other}
        >
          {children}
        </StyledLink>
      );
    } else {
      return (
        <StyledGLink
          onMouseEnter={(): void => {
            setHover(true);
          }}
          onMouseLeave={(): void => {
            setHover(false);
          }}
          hover={hover}
          to={to}
          activeClassName={activeClassName}
          {...other}
        >
          {children}
        </StyledGLink>
      );
    }
  } else {
    return (
      <StyledLink
        onMouseEnter={(): void => {
          setHover(true);
        }}
        onMouseLeave={(): void => {
          setHover(false);
        }}
        hover={hover}
        href={to}
        {...other}
      >
        {children}
      </StyledLink>
    );
  }
};

export default Link;
