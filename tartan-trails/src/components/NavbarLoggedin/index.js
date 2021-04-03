import React, { useState, useEffect } from 'react';
import UserService from '../../services/UserService';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { useHistory } from "react-router-dom";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLinkR
} from './NavbarElements';
import {ButtonR} from '../ButtonElement'
import {BtnWrap} from '../InfoSection/InfoElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const history = useHistory()

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const signUp = (!localStorage.getItem("auth")) ? (
    <NavItem>
      <NavLinkR to="/signup">
        sign up
      </NavLinkR>
    </NavItem>) : null;

  const signInOut = (!localStorage.getItem("auth")) ? (<NavBtnLink to='/Signin'>Sign in</NavBtnLink>) : (<BtnWrap>
    <ButtonR
      primary={true}
      dark={true}
      onClick={() => {UserService.logOut();history.push("/")}}
      >
      Sign Out
    </ButtonR>
  </BtnWrap>)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              tartan trails
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <div className="button-container">
              {signUp}
              {signInOut}
            </div>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
