import styled from '@emotion/styled';

const Main = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  max-width: ${({ theme }): string => theme.contentWidth};
  justify-content: flex-start;
  margin: 20vh 10vw;
  overflow-x: visible;
  ${({ theme }): string => theme.media.phone} {
    /* margin-top: 10vh; */
  }
`;

export default Main;
