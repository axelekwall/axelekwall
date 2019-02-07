import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 24px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const Facts = () => (
  <StaticQuery
    query={graphql`
      query {
        allFactsJson {
          edges {
            node {
              key
              before
              value
              after
              url
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h3>Some facts</h3>
        <List>
          {data.allFactsJson.edges.map(
            ({ node: { key, before, value, after, url } }) => {
              return (
                <ListItem key={key}>
                  <h5>
                    <span>{before}</span>{' '}
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      <b>{value}</b>
                    </Link>{' '}
                    <span>{after}</span>
                  </h5>
                </ListItem>
              );
            }
          )}
        </List>
      </div>
    )}
  />
);

export default Facts;
