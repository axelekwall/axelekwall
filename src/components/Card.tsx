import React, { FunctionComponent } from 'react';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const CardWrapper = styled.div`
  width: 100%;
`;

const CardImg = styled(Img)``;

type NavTo = (slug: string) => () => void;

const Card: FunctionComponent = ({
  frontmatter: { image, title, slug },
  excerpt,
}: any) => {
  const navTo: NavTo = slug => (): void => {
    navigate(slug);
  };
  return (
    <CardWrapper onClick={navTo(slug)}>
      {image && <CardImg fluid={image.childImageSharp.fluid} />}
      <div>{title}</div>
      <div>{excerpt}</div>
    </CardWrapper>
  );
};

export default Card;
