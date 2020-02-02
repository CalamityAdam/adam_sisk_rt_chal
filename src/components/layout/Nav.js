import React from 'react';
import styled from 'styled-components';

/**
 * !TODO gradient builder
 */
// function gradientBuilder() {
  
// }

/**
 * Nav styles
 */
const NavContainer = styled.nav`
  position: sticky;
  height: 60px;
  left: 0px;
  top: 0px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  display: grid;
  align-items: center;
  background-color: ${props => props.theme.blue};
  background-image: ${props => {
    const { red, orange, yellow, green, blue } = props.theme;
    return window.outerWidth > 1400 && `linear-gradient(
      to right,
      ${blue} calc(80vw - 50px), ${green}, ${yellow}, ${orange}, ${red} 105%
    )`;
  }};
  ul {
    margin: 0;
    padding-left: 120px;
    display: grid;
    list-style-type: none;
    grid-template-columns: 1fr 10fr;
  }
  li {
    display: inline-block;
  }
  a {
    font-weight: 700;
    font-size: 2.4rem;
    text-decoration: none;
    color: ${props => props.theme.offwhite};
  }
  @media (min-width: 1200px) {
    background-image: ${props => {
      const { red, orange, yellow, green, blue } = props.theme;
      return window.outerWidth > 1400 && `linear-gradient(
        to right,
        ${blue} calc(80vw - 50px), ${green}, ${yellow}, ${orange}, ${red} 105%
      )`;
    }};
  }
`;
const Logo = styled.img`
  box-sizing:  content-box;
  position: absolute;
  /* align-self: center; */
  justify-self: center;
  width: 200px;
  /* background-color: ${props => props.theme.offwhite};
  border: 2px solid ${props => props.theme.offwhite};
  border-radius: 5px;
  padding: 9px 5px 0 5px; */
`;

function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <a href="#">Reviews</a>
        </li>
        <Logo src="https://www.reviewtrackers.com/wp-content/themes/rt2020/img/ReviewTrackers-logo-secondary-reverse-2color@2x.png" />
      </ul>
    </NavContainer>
  );
}

export default Nav;
