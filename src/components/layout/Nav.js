import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: sticky;
  height: 60px;
  left: 0px;
  top: 0px;
  background-color: ${props => props.theme.blue};
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

function Nav(props) {
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
