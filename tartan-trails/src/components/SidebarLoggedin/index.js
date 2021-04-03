import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';
import { useHistory } from 'react-router-dom'
import UserService from "../../services/UserService"


const Sidebar = ({ isOpen, toggle }) => {

  const history = useHistory()

  const logOut = () => {
    UserService.logOut()
    history.push("/")
  }

  const menu = (localStorage.getItem("auth")) ? (
    <SideBtnWrap>
        <SidebarRoute onClick={logOut}>Sign Out</SidebarRoute>
      </SideBtnWrap>
  ) : (
    <>
      <SidebarMenu>
        <SidebarLink
          to='signup'
        >
          Sign Up
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/Signin'>Sign In</SidebarRoute>
      </SideBtnWrap>
    </>
  )

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        {menu}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
