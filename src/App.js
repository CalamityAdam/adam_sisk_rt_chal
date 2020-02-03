import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Router } from '@reach/router';
import { Nav } from './components/layout';
import { ReviewPage } from './components/reviews';
import { ReviewList } from './components/reviews';
import { useStateValue } from './store/state';
import { SET_REVIEWS } from './store/actions';

/**
 * API endpoints
 */
export const BACKEND_URL = 'http://localhost:3000';

/**
 * global/context styles
 */
const theme = {
  red:         '#b3002d',
  orange:      '#b34500',
  yellow:      '#b39e00',
  green:       '#00b35c',
  blue:        '#0057B3',
  purple:      '#8600b3',
  black:       '#000000',
  shuttlegray: '#5D6167',
  bae:         '#BCABAE',
  gray:        '#8D95A3',
  offwhite:    '#FBFCFD',
  bs: '0px 4px 4px rgba(0, 0, 0, 0.25)', /* box-shadow */
  br: '5px', /* border-radius */
};
theme.grey = theme.gray;
theme.shuttlegrey = theme.shuttlegray;

/**
 * App styles
 */
const AppContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-rows: 100px auto; /* 100px = 60px nav height + 40px margin */
  font-family: 'Roboto';
  font-size: 10px;
`;

function App() {
  /**
   * state: {
   *   reviews: [],
   * }
   */
  const [{ reviews }, dispatch] = useStateValue();

  useEffect(() => {
    function setReviews(reviews) {
      dispatch({
        type: SET_REVIEWS,
        reviews,
      });
    }
    
    // cleanup utils
    const controller = new AbortController();
    const signal = controller.signal;
    
    async function addRespondedToReviews(reviews) {
      // adds a boolean property to all reviews of whether the review has
      // been responded to or not
      const responses = await fetch(`${BACKEND_URL}/responses`, {
        headers: {
          'Content-Type': 'application/json',
        },
        signal,
      }).then(res => res.json())
        .then(responses => responses.map(res => res.review_id));
        const modifiedReviews = reviews.map(review => {
          if (responses.includes(review.id)) {
            review.responded = true;
          } else {
            review.responded = false;
          }
          return review;
        })
        return modifiedReviews;
    }


    function fetchAllReviews() {
      fetch(`${BACKEND_URL}/reviews`, {
        headers: {
          'Content-Type': 'application/json',
        },
        signal,
      })
        .then(res => res.json())
        .then(async reviews => {
          const modifiedReviews = await addRespondedToReviews(reviews);
          setReviews(modifiedReviews);
        })
        .catch(err => console.error(err));
    }

    fetchAllReviews();

    // cleanup & unsubscribe function
    return function cleanup() {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Nav />
        <Router>
          <ReviewList path="/" default reviews={reviews} />
          <ReviewPage path="review/:id" />
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
