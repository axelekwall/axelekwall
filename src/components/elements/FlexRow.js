import styled from '@emotion/styled';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  max-width: ${({ theme }) => theme.contentWidth};
  justify-content: flex-start;
  margin-top: 24px;
  margin-bottom: 10vh;
  overflow-x: visible;
`;

export default FlexRow;
