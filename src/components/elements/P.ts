import styled from '@emotion/styled';

// TODO: Change back to p element when next/image adds support for nesting inside p
const P = styled.div`
  padding: 16px 0;
  font-family: ${({ theme }): string => theme.fonts.sans};
  color: ${({ theme }): string => theme.colors['text-light']};
  line-height: 1.4;
`;

export default P;
