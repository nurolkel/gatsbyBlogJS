import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    a {
        flex: 1;
        text-decoration: none;
        color: rebeccapurple;
        font-size: 20px;
    }
`

const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: white;
    transition: all 0.3s ease-in;
    top: 6.5vh;
    right: ${({open}) => open ? "0" : "-100%"};
    gap: 10px;
    
    a{
        padding: 10px;
        margin: 10px;
        font-size: 20px;
        text-decoration: none;
        cursor:pointer;
        color: rebeccapurple;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        position: static;
        justify-content: space-around;
        align-items: center;
        padding: 5px;
        margin: 0 auto;
        width: 50%;
         a {
            text-align: end;
         }
    }
`


const Toggle = styled.div`
  display: flex;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (min-width: 768px) {
    display: none;
  }
`


const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${({open}) => open ? "rotate(-45deg)" : "inherit"};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${({open}) => open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${({open}) => open ? "0" : "1"};
    transform: ${({open}) => open ? "rotate(90deg) " : "rotate(0deg)"};
    top: 10px;
  }
`


const NavBar = () => {

    const [show, setShow] = useState(false)

    const closeNavBar = () => setShow(false)

    return (
        <Nav>
            <Link to="/"><h3>Blog Site</h3></Link>
            <Toggle onClick={()=> setShow(!show)}> 
                <Hamburger open={show}  />
            </Toggle>
            <NavLinks open={show}>
                <Link to="/" onClick={closeNavBar}>Home</Link>
                <Link to="/about" onClick={closeNavBar}>About</Link>
                <Link to="/home" onClick={closeNavBar}>Blog</Link>
            </NavLinks>
        </Nav>
    )
}

export default NavBar;