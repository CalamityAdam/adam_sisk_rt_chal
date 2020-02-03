import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReviewDetails } from './';
import { Response } from '../responses/';
import { useStateValue } from '../../store/state';
import { SET_SELECTED_REVIEW } from '../../store/actions';
import { BACKEND_URL } from '../../App';

/**
 * ReviewPage styles
 */
const Container = styled.div`
  margin: 0 120px;
  display: grid;
  grid-template-rows: minmax(250px, auto) minmax(146px, auto);
  row-gap: 55px;
  padding-bottom: 40px;
  @media (max-width: 1000px) {
    margin-left: 80px;
    margin-right: 80px;
  }
  @media (max-width: 800px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (max-width: 400px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

/**
 * props.id: " "
 * state.response: { response } || null
 */
function ReviewPage({ id }) {
  const [{ selectedReview }, dispatch] = useStateValue();

  useEffect(() => {
    function setSelectedReview(review) {
      dispatch({
        type: SET_SELECTED_REVIEW,
        review,
      });
    }

    /**
     * cleanup utils
     */
    const controller = new AbortController();
    const signal = controller.signal;

    /**
     * fetch and set state.selectedReview
     */
    function fetchReview(id) {
      fetch(`${BACKEND_URL}/reviews/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        signal,
      })
        .then(res => res.json())
        .then(review => setSelectedReview(review))
        .catch(err => console.error(err));
    }

    fetchReview(id);

    /**
     * cleanup & unsubscribe function
     */
    return function cleanup() {
      controller.abort();
      dispatch({
        type: SET_SELECTED_REVIEW,
        id: null,
      });
    };
  }, [id, dispatch]);
  
  return (
    <Container>
      {selectedReview ? (
        <>
        <ReviewDetails review={selectedReview} />
        <Response reviewId={selectedReview.id} />
        </>
      ) : (
        /**
         * !TODO add error handling for no review found
         */
        <h2>No such review found</h2>
      )}
    </Container>
  );
}

export default ReviewPage;
