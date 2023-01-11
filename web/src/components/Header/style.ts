import styled from "styled-components";


export const HeaderContainer = styled.div`

height: 10vh;
max-width: 1120px;
margin: 0 auto;
display: flex;
align-items: center;

> img {
  height: 5rem; 
}

button {
  margin-left: auto;
  background: transparent;
  border: 0;

  svg{
    color: #999591;
    width: 1.4rem;
    height: 100%;
  }
}
`;

export const Content = styled.header`
  width: 100%;
  height: 10vh;
  background: #000;
`;

export const Nav = styled.nav`
  overflow: hidden;
  background-color: #000;
`;

export const NavLink = styled.a`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  :hover {
    color: #777;
  }
`;

