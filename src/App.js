import React, { useEffect } from 'react';
import './App.css';
import { Nav } from './components/layout';
import styled, { ThemeProvider } from 'styled-components';

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
  useEffect(() => {
    console.log('did mount')
    
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Nav />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
