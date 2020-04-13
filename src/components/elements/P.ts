import styled from '../../styles/styled';

const P = styled.p`
  font-family: ${({ theme }): string => theme.fonts.sans};
  color: ${({ theme }): string => theme.colors['text-light']};
`;

export default P;
