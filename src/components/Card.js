import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const CardWrapper = styled.div`
  width: 100%;
`;

const CardImg = styled(Img)``;

const Card = ({ frontmatter: { image, title }, excerpt }) => (
  <CardWrapper>
    <CardImg fluid={image.childImageSharp.fluid} />
    <div>{title}</div>
    <div>{excerpt}</div>
  </CardWrapper>
);

export default Card;
