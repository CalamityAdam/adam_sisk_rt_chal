import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  height: 250px;
  width: 300px;
  padding: 20px;
  display: grid;
  grid-template-rows: 28px 18px auto 16px;
  background-color: ${props => props.theme.offwhite};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  margin: 25px 0 0 0;
  font-size: 1.8rem;
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
  color: ${props => props.theme.gray}
`;

function ReviewCard({ review }) {
  return (
    <CardContainer>
      <Place>{review.place}</Place>
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
