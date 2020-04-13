import React, { FunctionComponent } from 'react';
import styled from '../styles/styled';
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

interface Props {}

const Project: FunctionComponent<Props> = ({}) => (
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
