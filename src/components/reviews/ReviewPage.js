import React, { useEffect } from 'react';
import { ReviewDetails } from './';
import { useStateValue } from '../../store/state';
import { SET_SELECTED_REVIEW } from '../../store/actions';
import { BACKEND_URL } from '../../App';

/**
 * props.id: " "
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

    function fetchReview(id) {
      fetch(`${BACKEND_URL}/reviews/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        signal,
      })
        .then(res => res.json())
        .then(review => setSelectedReview(review));
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

  console.log(selectedReview);
  return (
    <div>
      {selectedReview ? (
        <ReviewDetails review={selectedReview} />
      ) : (
        <h1>oops</h1>
      )}
    </div>
  );
}

export default ReviewPage;
