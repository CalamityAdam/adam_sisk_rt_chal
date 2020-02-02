import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  height: 250px;
  width: 300px;
  background-color: ${props => props.theme.offwhite};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

function ReviewCard({ review }) {
  return (
    <CardContainer>
      <h1>{review.author}</h1>
      <p>{review.rating}</p>
      <p>{review.content}</p>
    </CardContainer>
  );
}

export default ReviewCard;
