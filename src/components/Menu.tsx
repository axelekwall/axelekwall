import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from 'gatsby';
import styled from '../styles/styled';
import Main from './elements/Main';
import { State } from '../store';
import { actions } from '../store/ui';

const MenuWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  z-index: 50;
`;

const Li = styled.li`
  text-decoration: none;
  transition: all ease-in-out 200ms;
  :hover {
    background-color: white;
    color: black;
  }
  cursor: pointer;
  list-style: none;
  font-size: 3em;
  margin: 15px 0;
  font-family: ${({ theme }): string => theme.fonts['sans']};
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const Menu: FC = () => {
  const isOpen = useSelector<State, boolean>((state) => state.ui.menuOpen);
  const dispatch = useDispatch();
  const createNavigate = useCallback(
    (url: string, external = false) => (): void => {
      dispatch(actions.toggleMenu());
      if (external) {
        window.open(url, 'tab');
      } else {
        navigate(url);
      }
    },
    [dispatch]
  );
  return isOpen ? (
    <MenuWrapper>
      <Main>
        <Ul>
          <Li onClick={createNavigate('/')}>me</Li>
          <Li onClick={createNavigate('/work')}>projects</Li>
          <Li onClick={createNavigate('https://github.com/axelekwall', true)}>
            code
          </Li>
          <Li
            onClick={createNavigate(
              'https://www.linkedin.com/in/axelekwall/',
              true
            )}
          >
            linkedin
          </Li>
          <Li
            onClick={createNavigate(
              'https://github.com/axelekwall/axelekwall.se',
              true
            )}
          >
            src/
          </Li>
        </Ul>
      </Main>
    </MenuWrapper>
  ) : null;
};

export default Menu;
