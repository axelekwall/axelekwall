import React, { FC } from 'react';
import styled from '../styles/styled';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store';
import { actions } from '../store/ui';
import { FiMenu } from 'react-icons/fi';

interface StyleProps {
  isOpen: boolean;
}

const FooterOuter = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 120px;
  background-color: transparent;
  z-index: 100;
`;

const FooterInner = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  max-width: ${(props): string => props.theme.contentWidth};
  margin: 0 10vw;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const FooterButton = styled.div<StyleProps>`
  background-color: ${(props): string => (props.isOpen ? 'white' : 'black')};
  border-radius: 999px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.2);
  }
`;

const Footer: FC = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector<State, boolean>((state) => state.ui.menuOpen);
  return (
    <FooterOuter>
      <FooterInner>
        <FooterButton
          onClick={(): void => {
            dispatch(actions.toggleMenu());
          }}
          isOpen={menuOpen}
        >
          <FiMenu style={{ color: menuOpen ? 'black' : 'white' }} />
        </FooterButton>
      </FooterInner>
    </FooterOuter>
  );
};

export default Footer;
