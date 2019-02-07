import styled from '@emotion/styled';

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  ${({ theme }) => theme.media.tablet} {
    padding: 0px;
  }
`;

export default TextContainer;
