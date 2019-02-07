import styled from '@emotion/styled';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ desktopWidth }) => desktopWidth || '100%'};
  padding: 24px;
  align-self: ${({ alignSelf }) => alignSelf || 'flex-start'};
  ${({ theme }) => theme.media.tablet} {
    padding: ${({ tabletWidth }) => tabletWidth ? '24px' : '24px 0px'};
    width: ${({ tabletWidth }) => tabletWidth || '100%'};
  }
  ${({ theme }) => theme.media.phone} {
    padding: 24px 0px;
    width: ${({ phoneWidth }) => phoneWidth || '100%'};
  }
`;

export default FlexContainer;
