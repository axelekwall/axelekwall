import styled from '@emotion/styled';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }): string => theme.colors['background-light']};
`;

export default Page;
