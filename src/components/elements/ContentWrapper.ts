import styled from '@emotion/styled';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: ${({ theme }): string => theme.contentWidth};
  justify-content: flex-start;
  margin-top: 20vh;
  margin-bottom: 10vh;
  overflow-x: visible;
  ${({ theme }): string => theme.media.phone} {
    margin-top: 10vh;
  }
`;

export default ContentWrapper;
