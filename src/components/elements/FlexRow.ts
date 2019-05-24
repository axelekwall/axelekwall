import styled from '@emotion/styled';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80vw;
  max-width: ${({ theme }) => theme.contentWidth};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  margin-top: 24px;
  margin-bottom: 24px;
`;

export default FlexRow;
