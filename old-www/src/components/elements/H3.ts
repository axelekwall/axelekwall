import styled from '@emotion/styled';
import { Font } from '../../styles/theme';

interface H3Props {
  font?: Font;
}

const H3 = styled.h3<H3Props>`
  font-family: ${({ theme, font = 'sans' }): string => theme.fonts[font]};
  color: ${({ theme }): string => theme.colors['text-light']};
`;

export default H3;
