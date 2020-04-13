import React, { FC } from 'react';
import Layout from '../components/Layout';

const Work: FC = () => {
  return (
    <Layout title={'work'}>
      {/* <FlexRow>
        <FlexContainer
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
      </FlexRow>
      <FlexRow>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <FlexContainer key={node.id} desktopWidth="50%" tabletWidth="50%">
            <Card data={node} />
          </FlexContainer>
        ))}
      </FlexRow> */}
    </Layout>
  );
};

export default Work;
