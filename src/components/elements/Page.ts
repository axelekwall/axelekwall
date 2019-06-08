import styled from '@emotion/styled';

interface PageProps {
  backgroundColor?: string;
}

const Page = styled.div<PageProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme, backgroundColor }): string =>
    backgroundColor ? theme.colors[backgroundColor] : 'white'};
`;

export default Page;
