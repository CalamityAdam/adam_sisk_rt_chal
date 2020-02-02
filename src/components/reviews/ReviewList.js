import React from 'react';
import styled from 'styled-components';
import { ReviewCard } from './index'

const ListContainer = styled.div`
  display: grid;
  /* padding: 0 120px; */
  justify-items: center;
  margin-top: 100px;
  column-gap: auto;
  row-gap: 100px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  };
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

function ReviewList({ reviews }) {
  return (
    <ListContainer>
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </ListContainer>
  );
}

export default ReviewList;
