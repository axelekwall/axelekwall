import React, { FunctionComponent, ReactElement } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '../utils/styled'

import Link from './Link'

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  margin-bottom: 24px;
`

const Wrapper = styled.div`
  width: 100%;
`

const Facts: FunctionComponent = () => (
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
    render={(data): ReactElement => (
      <Wrapper>
        <h3>Some facts</h3>
        <List>
          {data.allFactsJson.edges.map(
            ({ node: { key, before, value, after, url } }) => {
              return (
                <ListItem key={key}>
                  <p>
                    <span>{before}</span>{' '}
                    {url ? (
                      <Link to={url} target="_blank" rel="noopener noreferrer">
                        <b>{value}</b>
                      </Link>
                    ) : (
                      <b>{value}</b>
                    )}{' '}
                    <span>{after}</span>
                  </p>
                </ListItem>
              )
            }
          )}
        </List>
      </Wrapper>
    )}
  />
)

export default Facts
