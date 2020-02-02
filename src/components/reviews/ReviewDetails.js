import React from 'react';
import styled from 'styled-components';

/**
 * ReviewDetails styles
 */
const Container = styled.div`
  display: grid;
  padding: 20px 80px;
  font-size: 1.8rem;
  display: grid;
  grid-template-rows: 28px 18px auto 16px;
  background-color: ${props => props.theme.offwhite};
  border-radius: 5px;
  box-shadow: ${props => props.theme.bs};
`;
const Place = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 5px;
`;
const Rating = styled.div`
  font-size: 1.8rem;
`;
const Content = styled.p`
  margin: 25px 0;
  font-size: 1.8rem;
  color: ${props => props.theme.shuttlegray};
  
  /* overflow protection */
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;
const CardFooter = styled.div`
  grid-template-columns: 1fr auto auto;
`;
const Author = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  margin-right: 28px;
`;
const PublishedAt = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  color: ${props => props.theme.gray};
`;

/**
 * props.review: {
 *   author: "",
 *   content: "text",
 *   place: "",
 *   published_at: "date",
 *   rating: "int[0-5]",
 *   id: "uid"
 *   }
 */
function ReviewDetails({ review }) {
  return (
    <Container>
      <Place>{review.place}</Place>
      <Rating>{'⭐'.repeat(review.rating)}</Rating>
      <Content>{review.content}</Content>
      <CardFooter>
        <Author>{review.author}</Author>
        <PublishedAt>
          {new Date(review.published_at).toLocaleDateString()}
        </PublishedAt>
      </CardFooter>
    </Container>
  );
}

export default ReviewDetails;
