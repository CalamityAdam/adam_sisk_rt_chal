import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Router } from '@reach/router';
import { Nav } from './components/layout';
import { ReviewPage } from './components/reviews';
import { ReviewList } from './components/reviews';
import { useStateValue } from './store/state';

/**
 * API endpoints
 */
const BACKEND_URL = 'http://localhost:3000';

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
};

/**
 * App styles
 */
const AppContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-rows: 60px auto;
  font-family: 'Roboto';
  font-size: 10px;
`;

function App() {
  /**
   *   state: {
   *    reviews: [],
   *   }
   */
  const [{ reviews, error }, dispatch] = useStateValue()
  
  useEffect(() => {
    function setReviews(reviews) {
      dispatch({
        type: 'setReviews',
        reviews
      })
    }
    
    fetch(`${BACKEND_URL}/reviews`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(reviews => setReviews(reviews));
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
