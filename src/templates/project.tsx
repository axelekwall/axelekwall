import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import styled from '../utils/styled';
import Layout from '../components/Layout';
import Link from '../components/Link';
import FlexRow from '../components/elements/FlexRow';
import FlexContainer from '../components/elements/FlexContainer';

const LinkRow = styled(FlexRow)`
  margin: 0;
`;

const LinkContainer = styled(FlexContainer)`
  padding: 0;
  ${({ theme }): string => theme.media.tablet} {
    padding: 0;
  }
  ${({ theme }): string => theme.media.phone} {
    padding: 0;
  }
`;

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        github: string;
        url: string;
      };
      html: string;
    };
  };
}

const Project: FunctionComponent<Props> = ({
  data: {
    markdownRemark: {
      frontmatter: { title, github, url },
      html,
    },
  },
}) => (
  <Layout title={title}>
    <LinkRow>
      <LinkContainer desktopWidth="30%" tabletWidth="50%" phoneWidth="50%">
        <Link to={github} target="_blank" rel="noopener noreferrer">
          github
        </Link>
      </LinkContainer>
      <LinkContainer desktopWidth="30%" tabletWidth="50%" phoneWidth="50%">
        <Link to={url} target="_blank" rel="noopener noreferrer">
          website
        </Link>
      </LinkContainer>
    </LinkRow>
    <FlexRow>
      <FlexContainer dangerouslySetInnerHTML={{ __html: html }} />
    </FlexRow>
  </Layout>
);

export default Project;

export const pageQuery = graphql`
  query ProjectPage($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        github
        url
      }
      html
    }
  }
`;
