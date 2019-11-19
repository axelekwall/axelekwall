import styled from '../../utils/styled';

interface FlexContainerProps {
  desktopWidth?: string;
  tabletWidth?: string;
  phoneWidth?: string;
  alignSelf?: string;
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${({ desktopWidth }): string => desktopWidth || '100%'};
  padding: ${({ desktopWidth }): string =>
    desktopWidth ? '24px' : '24px 0px'};
  align-self: ${({ alignSelf }): string => alignSelf || 'flex-start'};
  ${({ theme }): string => theme.media.tablet} {
    padding: ${({ tabletWidth }): string =>
      tabletWidth ? '24px' : '24px 0px'};
    width: ${({ tabletWidth }): string => tabletWidth || '100%'};
  }
  ${({ theme }): string => theme.media.phone} {
    padding: 24px 0;
    width: ${({ phoneWidth }): string => phoneWidth || '100%'};
  }
`;

export default FlexContainer;
