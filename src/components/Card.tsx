import React, { FunctionComponent } from 'react';
import { navigate } from 'gatsby';
import styled from '../styles/styled';
import Img from 'gatsby-image';
import { Image } from '../types/query';

const CardWrapper = styled.div`
  width: 100%;
`;

const CardImg = styled(Img)``;

type NavTo = (slug: string) => () => void;

export interface CardProps {
  data: {
    frontmatter: {
      image: Image;
      title: string;
      slug: string;
    };
    excerpt: string;
  };
}

const Card: FunctionComponent<CardProps> = ({
  data: {
    frontmatter: { image, title, slug },
    excerpt,
  },
}) => {
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
