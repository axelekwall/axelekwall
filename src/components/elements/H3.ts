import styled from '../../styles/styled';

interface H3Props {
  font?: string;
}

const H3 = styled.h3<H3Props>`
  font-family: ${({ theme, font = 'sans' }): string => theme.fonts[font]};
  color: ${({ theme }): string => theme.colors['text-light']};
`;

export default H3;
