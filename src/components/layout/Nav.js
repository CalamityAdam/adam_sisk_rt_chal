import React from 'react';
import styled from 'styled-components';

/**
 * Nav styles
 */
const NavContainer = styled.nav`
  position: sticky;
  height: 60px;
  left: 0px;
  top: 0px;
  /* background-color: ${props => props.theme.blue}; */
  background-image: ${props => {
    const { red, orange, yellow, green, blue } = props.theme;
    return `linear-gradient(
      to right,
      ${blue} calc(80vw - 50px), ${green}, ${yellow}, ${orange}, ${red} 105%
    )`;
  }};
  /* border: 2px solid ${props => props.theme.blue}; */
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  display: grid;
  align-items: center;
  ul {
    margin: 0;
    padding-left: 120px;
    display: grid;
    list-style-type: none;
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
`;

function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <a href="#">Reviews</a>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;
