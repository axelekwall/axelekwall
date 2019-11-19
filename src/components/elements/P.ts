import styled from '../../styles/styled';

const P = styled.p`
  font-family: ${({ theme }): string => theme.fonts.sans};
  color: white;
`;

export default P;
