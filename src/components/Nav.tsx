import React, { FunctionComponent, useState, ReactElement } from 'react';
import { StaticQuery, graphql, navigate } from 'gatsby';
import styled from '@emotion/styled';
import Link from './Link';

interface NavContainerProps {
  backgroundColor?: string;
}

const NavContainer = styled.nav<NavContainerProps>`
  padding: 12px 24px 24px;
  z-index: 10;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme, backgroundColor }): string =>
    backgroundColor ? theme.colors[backgroundColor] : 'white'};
`;

interface NavListProps {
  open: boolean;
}

const NavList = styled.ul<NavListProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  overflow-x: hidden;
  margin: 0;
  align-items: center;
  text-decoration: none;
  transition: 0.1s ease-in-out;
  height: ${({ open }): string => (open ? 'auto' : '0')};
  transform: ${({ open }): string => (open ? '' : 'translate(0, 400%)')};
  ${({ theme }): string => theme.media.phone} {
    flex-direction: column;
  }
`;

interface NavListItemProps {
  width: number;
}

const NavListItem = styled.li<NavListItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: ${({ width }): string => width + '%'};
`;

const NavToggleContainer = styled.div`
  width: 80vw;
  max-width: ${({ theme }): string => theme.contentWidth};
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavToggle = styled.div`
  align-self: center;
`;

interface NavProps {
  backgroundColor?: string;
}

const Nav: FunctionComponent<NavProps> = ({ backgroundColor }) => {
  const [open, setOpen] = useState(false);
  const toggle = (): void => {
    setOpen(!open);
  };
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(filter: { frontmatter: { menu: { eq: true } } }) {
            edges {
              node {
                id
                frontmatter {
                  title
                  slug
                }
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark: { edges } }): ReactElement => (
        <NavContainer backgroundColor={backgroundColor}>
          <NavList open={open}>
            {edges.map(
              ({
                node: {
                  id,
                  frontmatter: { title, slug },
                },
              }): ReactElement => (
                <NavListItem key={id} width={100 / edges.length}>
                  <Link to={slug}>{title}</Link>
                </NavListItem>
              )
            )}
          </NavList>
          <NavToggleContainer>
            <NavToggle onClick={() => navigate('/')}>{'< home'}</NavToggle>
            <NavToggle onClick={toggle}>open menu</NavToggle>
          </NavToggleContainer>
        </NavContainer>
      )}
    />
  );
};

export default Nav;
