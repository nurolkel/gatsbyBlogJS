import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const FooterBox = styled.footer`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        text-decoration: none;
        color: rebeccapurple;
        font-size: 15px;
    }
`


const Footer = () => (
    <FooterBox>
        <p>Made by &copy; <Link to="/">Kelvin Nunez</Link> {new Date().getFullYear()}</p>
    </FooterBox>
)

export default Footer;