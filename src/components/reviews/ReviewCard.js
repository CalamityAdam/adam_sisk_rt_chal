import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

/**
 * ReviewCard styles
 */
const CardContainer = styled.div`
  height: 250px;
  width: 300px;
  padding: 20px;
  display: grid;
  grid-template-rows: 28px 18px auto 16px;
  background-color: ${props => props.theme.offwhite};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(188, 171, 174, 0.25);
`;
const Place = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 5px;
  a {
    color: ${props => props.theme.black};
    text-decoration: none;
  }
`;
const Rating = styled.div`
  font-size: 1.8rem;
`;
const Content = styled.p`
  margin: 25px 0 0 0;
  font-size: 1.8rem;
  font-color: ${props => props.theme.shuttlegray};
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
function ReviewCard({ review }) {
  return (
    <CardContainer>
      <Place><Link to={`review/${review.id}`}  >{review.place}</Link></Place>
      <Rating>{'⭐'.repeat(review.rating)}</Rating>
      <Content>{`${review.content.substring(0, 20)}...`}</Content>
      <CardFooter>
        <Author>{review.author}</Author>
        <PublishedAt>{new Date(review.published_at).toLocaleDateString()}</PublishedAt>
      </CardFooter>
    </CardContainer>
  );
}

export default ReviewCard;
