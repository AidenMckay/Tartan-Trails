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
import UserService from '../../services/UserService'

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
    <SideBtnWrap>
      <SidebarRoute to='/Signin'>Sign In</SidebarRoute>
    </SideBtnWrap>
  )
  
  const signUp = (localStorage.getItem("auth")) ? null : (
    <SidebarLink
      to='signup'
      onClick={toggle}
      smooth={true}
      duration={500}
      spy={true}
      exact='true'
      offset={-80}
    >
      Sign Up
    </SidebarLink>
  )

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='gnome'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Gnome
          </SidebarLink>
          <SidebarLink
            to='services'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Services
          </SidebarLink>
          { signUp }
        </SidebarMenu>
        { menu }
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
