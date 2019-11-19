import styled from '../../styles/styled';

interface H1Props {
  font: string;
}

const H1 = styled.h1<H1Props>`
  font-family: ${({ theme, font }): string => theme.fonts[font]};
  color: white;
`;

export default H1;
