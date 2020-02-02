import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import { Nav } from './components/layout';
import { ReviewList } from './components/reviews';

/**
 * backend API url
 */
const BACKEND_URL = 'http://localhost:3000';

/**
 * global style theme/colors
 */
const theme = {
  offwhite: '#FBFCFD',
  black: '#000000',
  blue: '#0057B3',
  gray: '#8D95A3',
};

const AppContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-rows: 60px auto;
`;

function App() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${BACKEND_URL}/reviews`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(reviews => setReviews(reviews));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Nav />
        <ReviewList reviews={reviews} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
