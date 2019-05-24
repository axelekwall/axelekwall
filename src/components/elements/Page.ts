import styled from '@emotion/styled';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : 'white'};
`;

export default Page;
