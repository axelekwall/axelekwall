import styled from '@emotion/styled';

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  width: ${({ main }): string => (main ? '100%' : '70%')};
  align-self: ${({ main }): string => (main ? 'flex-start' : 'center')};
  ${({ theme }): string => theme.media.tablet} {
    width: ${({ main }): string => (main ? '100%' : '90%')};
    align-self: ${({ main }): string => (main ? 'flex-start' : 'flex-end')};
  }
  ${({ theme }): string => theme.media.phone} {
    width: 100%;
    align-self: flex-start;
  }
`;

export default TitleRow;
