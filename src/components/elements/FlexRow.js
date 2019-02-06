import styled from '@emotion/styled';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  max-width: ${({ theme }) => theme.contentWidth};
  justify-content: flex-start;
  margin-top: 20vh;
  margin-bottom: 10vh;
  overflow-x: visible;
  ${({ theme }) => theme.media.phone} {
    margin-top: 10vh;
  }
`;

export default FlexRow;
