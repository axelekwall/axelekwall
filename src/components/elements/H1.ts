import styled from '@emotion/styled';
import { Font } from '../../styles/theme';

interface H1Props {
  font?: Font;
}

const H1 = styled.h1<H1Props>`
  font-family: ${({ theme, font = 'sans' }): string => theme.fonts[font]};
  color: inherit;
`;

export default H1;
