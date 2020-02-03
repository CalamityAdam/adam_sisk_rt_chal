import React from 'react';
import { Link, navigate } from '@reach/router';
import styled from 'styled-components';
import { ReactComponent as CommentIcon } from '../../svg/comment.svg';

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
  border-radius: ${props => props.theme.br};
  box-shadow: ${props => props.theme.bs};
  :hover {
    cursor: pointer;
  }
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
  color: ${props => props.theme.shuttlegray};
`;
const CardFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  .icon {
    grid-column-end: 6;
  }
`;
const Author = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  margin-right: 28px;
  white-space: nowrap;
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
 *   id: "uid",
 *   responded: bool
 *   }
 */
function ReviewCard({ review }) {
  // click card to navigate to details
  function handleCardClick() {
    navigate(`/review/${review.id}`);
  }

  return (
    <CardContainer onClick={handleCardClick}>
      <Place>
        <Link to={`review/${review.id}`}>{review.place}</Link>
      </Place>
      <Rating>{'⭐'.repeat(review.rating)}</Rating>
      <Content>{`${review.content.substring(0, 20)}...`}</Content>
      <CardFooter>
        <Author>{review.author}</Author>
        <PublishedAt>
          {new Date(review.published_at).toLocaleDateString()}
        </PublishedAt>
        {review.responded && <CommentIcon className="icon"/>}
      </CardFooter>
    </CardContainer>
  );
}

export default ReviewCard;
