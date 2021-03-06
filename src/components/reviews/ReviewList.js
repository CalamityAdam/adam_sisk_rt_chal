import React from 'react';
import styled from 'styled-components';
import { ReviewCard } from './index';

/**
 * ReviewList styles
 */
const ListContainer = styled.div`
  display: grid;
  justify-items: center;
  column-gap: auto;
  row-gap: 100px;
  padding-bottom: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

/**
 * props.reviews: [ ]
 */
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
