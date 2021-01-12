import React, { FC } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

interface Data {
  file: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

const Row = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  ${({ theme }): string => theme.media.phone} {
    flex-direction: column-reverse;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  max-width: 400px;
  ${({ theme }): string => theme.media.phone} {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
  width: 100%;
  ${({ theme }): string => theme.media.phone} {
    flex-direction: row-reverse;
    padding: 0;
  }
`;

const Text = styled.h3`
  font-family: ${({ theme }): string => theme.fonts['sans']};
`;

const ProfileCard: FC = ({ children }) => {
  const data = useStaticQuery<Data>(graphql`
    query IndexPage {
      file(
        relativePath: { eq: "me_image.jpg" }
        sourceInstanceName: { eq: "media" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Row>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid}></Img>
      </ImageWrapper>
      <TextWrapper>
        <Text>{children}</Text>
      </TextWrapper>
    </Row>
  );
};

export default ProfileCard;
