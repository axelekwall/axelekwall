import React, { Component } from 'react';
import { StaticQuery, graphql, navigate } from 'gatsby';
import styled from '@emotion/styled';

import Link from './Link';

const NavContainer = styled.nav`
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
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : 'white'};
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  overflow-x: hidden;
  margin: 0;
  align-items: center;
  text-decoration: none;
  transition: 0.1s ease-in-out;
  height: ${({ open }) => (open ? 'auto' : '0')};
  transform: ${({ open }) => !open && 'translate(0, 400%)'};
  ${({ theme }) => theme.media.phone} {
    flex-direction: column;
  }
`;

const NavListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: ${({ width }) => width + '%'};
`;

const NavToggleContainer = styled.div`
  width: 80vw;
  max-width: ${({ theme }) => theme.contentWidth};
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavToggle = styled.div`
  align-self: center;
`;

class Nav extends Component {
  state = {
    open: false,
  };

  toggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  render() {
    const { backgroundColor } = this.props;
    const { open } = this.state;
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
        render={({ allMarkdownRemark: { edges } }) => (
          <NavContainer backgroundColor={backgroundColor} open={open}>
            <NavList open={open}>
              {edges.map(({ node: { id, frontmatter: { title, slug } } }) => (
                <NavListItem key={id} width={100 / edges.length}>
                  <Link to={slug}>{title}</Link>
                </NavListItem>
              ))}
            </NavList>
            <NavToggleContainer open={open}>
              <NavToggle onClick={() => navigate('/')}>{'< home'}</NavToggle>
              <NavToggle onClick={this.toggle}>open menu</NavToggle>
            </NavToggleContainer>
          </NavContainer>
        )}
      />
    );
  }
}

export default Nav;
