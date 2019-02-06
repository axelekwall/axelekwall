import styled from '@emotion/styled';

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  width: ${({ main }) => (main ? '100%' : '70%')};
  align-self: ${({ main }) => (main ? 'flex-start' : 'center')};
  ${({ theme }) => theme.media.tablet} {
    width: ${({ main }) => (main ? '100%' : '90%')};
    align-self: ${({ main }) => (main ? 'flex-start' : 'flex-end')};
  }
  ${({ theme }) => theme.media.phone} {
    width: 100%;
    align-self: flex-start;
  }
`;

export default TitleRow;
