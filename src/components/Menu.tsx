import { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTransition, animated } from '@react-spring/web';
import Main from './elements/Main';
import { State } from '../store';
import { actions } from '../store/ui';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

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
  font-size: 2.6em;
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
  const router = useRouter();
  const createNavigate = useCallback(
    (url: string, external = false) => (): void => {
      dispatch(actions.toggleMenu());
      if (external) {
        window.location.href = url;
      } else {
        router.push(url);
      }
    },
    [dispatch]
  );

  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions(
    (style, item) =>
      item && (
        <animated.div style={style}>
          <MenuWrapper>
            <Main>
              <Ul>
                <Li onClick={createNavigate('/')}>me</Li>
                {/* <Li onClick={createNavigate('/work')}>projects</Li> */}
                <Li onClick={createNavigate('/work/thesis')}>thesis</Li>
                <Li
                  onClick={createNavigate(
                    'https://github.com/axelekwall',
                    true
                  )}
                >
                  github
                </Li>
                <Li
                  onClick={createNavigate(
                    'https://www.linkedin.com/in/axelekwall/',
                    true
                  )}
                >
                  linkedin
                </Li>
              </Ul>
            </Main>
          </MenuWrapper>
        </animated.div>
      )
  );
};

export default Menu;
