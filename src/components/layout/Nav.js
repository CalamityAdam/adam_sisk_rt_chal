import React from 'react';
import { Link } from '@reach/router';
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
  display: grid;
  align-items: center;
  background-color: ${props => props.theme.blue};
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
`;
const Logo = styled.img`
  box-sizing:  content-box;
  position: absolute;
  justify-self: center;
  width: 200px;
`;

function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">Reviews</Link>
        </li>
        <Logo src="https://www.reviewtrackers.com/wp-content/themes/rt2020/img/ReviewTrackers-logo-secondary-reverse-2color@2x.png" />
      </ul>
    </NavContainer>
  );
}

export default Nav;
