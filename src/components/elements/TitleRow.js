import styled from '@emotion/styled';

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-self: flex-start;
  &:nth-of-type(2) {
    width: 70%;
    align-self: center;
  }
  ${({ theme }) => theme.media.tablet} {
    &:nth-of-type(2) {
      width: 90%;
      align-self: flex-end;
    }
  }
  ${({ theme }) => theme.media.phone} {
    &:nth-of-type(2) {
      width: 100%;
      align-self: flex-start;
    }
  }
`;

export default TitleRow;
