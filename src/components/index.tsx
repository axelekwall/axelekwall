import H1 from './elements/H1';
import P from './elements/P';
import H3 from './elements/H3';
import Link from './Link';
import Image from 'next/image';
import { FC } from 'react';
import Layout from './Layout';

const Img: FC<{ src: string; alt: string }> = (props) => (
  <Image width="500" height="500" {...props} />
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
