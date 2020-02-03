import React from 'react';
import styled from 'styled-components';

/**
 * ResponseDetails styles
 */
const ResponseContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;
const Content = styled.p`
  font-size: 1.8rem;
  color: ${props => props.theme.shuttlegray};
  margin: 0 0 25px 0;
`;
const Footer = styled.div`
  display: grid;
  grid-template-columns: minmax(80px, min-content) auto;
`;
const Author = styled.span`
  display: block;
  font-size: 1.4rem;
  margin-right: 10px;
`;
const PublishedAt = styled.span`
  display: block;
  font-size: 1.4rem;
  color: ${props => props.theme.gray};
`;

/**
 * props.response = { 
 *   id: " ",
 *   content: " ",
 *   author: " ",
 *   published_at: " date ",
 *   review_id: " ",
 *  }
 */
function ResponseDetails({ response }) {
  return (
    <ResponseContainer>
      <Content>{response.content}</Content>
      <Footer>
        <Author>{response.author}</Author>
        <PublishedAt>02/02/2020</PublishedAt>
      </Footer>
    </ResponseContainer>
  );
}

export default ResponseDetails;
