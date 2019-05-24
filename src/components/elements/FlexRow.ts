import styled from '@emotion/styled';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80vw;
  max-width: ${({ theme }): string => theme.contentWidth};
  justify-content: ${({ justify }): string => justify || 'flex-start'};
  margin-top: 24px;
  margin-bottom: 24px;
`;

export default FlexRow;
