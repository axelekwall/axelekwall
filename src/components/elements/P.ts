import styled from '../../styles/styled';

const P = styled.p`
  font-family: ${({ theme }): string => theme.fonts.sans};
  color: ${({ theme }): string => theme.colors['text-light']};
  line-height: 1.4;
`;

export default P;
