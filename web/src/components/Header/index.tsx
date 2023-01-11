import React from "react";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../../hooks/auth";
import { HeaderContainer, Content, Nav, NavLink } from "./style"

export const Header: React.FC = () => {

  const { signOut } = useAuth();

  return <Content>
    <HeaderContainer>
      <Nav>
        <NavLink href="/dashboard" >Home</NavLink>
        <NavLink href="/cat">HTTP Cat</NavLink>
        <NavLink href="/dog">Random Dog</NavLink>
        <NavLink href="/customers">Lista</NavLink>
      </Nav>

      <button type="button" onClick={signOut}>
        <FiLogOut />
      </button>
    </HeaderContainer>
  </Content>

}