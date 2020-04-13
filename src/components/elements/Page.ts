import styled from '../../styles/styled';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }): string => theme.colors['background-light']};
`;

export default Page;
