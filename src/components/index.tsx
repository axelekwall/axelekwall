import H1 from './elements/H1';
import P from './elements/P';
import H3 from './elements/H3';
import Link from './Link';
import Image from 'next/image';
import { FC } from 'react';
import Layout from './Layout';
import styled from '@emotion/styled';

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  ${({ theme }): string => theme.media.phone} {
    height: 200px;
  }
`;

const Img: FC<{ src: string; alt: string }> = ({ src, alt, ...props }) => (
  <ImageWrapper>
    <Image
      layout="fill"
      objectPosition="center"
      objectFit="contain"
      src={src}
      alt={alt}
      {...props}
    />
  </ImageWrapper>
);

const components = {
  wrapper: Layout,
  h1: H1,
  h3: H3,
  p: P,
  a: Link,
  Link,
  H1,
  P,
  img: Img,
};

export default components;
