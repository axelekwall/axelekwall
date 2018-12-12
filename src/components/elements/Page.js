import styled from '@emotion/styled';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme, backgroundColor }) =>
  theme.colors[backgroundColor]};
`;

export default Page;
