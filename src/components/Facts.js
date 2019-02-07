import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 24px;
`;

const Facts = () => (
  <StaticQuery
    query={graphql`
      query {
        allFactsJson {
          edges {
            node {
              name
              value
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <List>
          {data.allFactsJson.edges.map(({ node: { name, value } }) => {
            return (
              <ListItem key={name}>
                <span>{name}</span>: <span>{value}</span>
              </ListItem>
            );
          })}
        </List>
      </div>
    )}
  />
);

export default Facts;
