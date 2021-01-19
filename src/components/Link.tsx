import { FC } from 'react';
import styled from '@emotion/styled';
import { Font } from '../styles/theme';
import NextLink from 'next/link';

interface LinkProps {
  font?: Font;
}

interface Props extends LinkProps {
  href: string;
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

const Link: FC<Props> = ({ href, ...rest }) => (
  <NextLink href={href} passHref>
    <StyledLink {...rest} />
  </NextLink>
);

export default Link;
