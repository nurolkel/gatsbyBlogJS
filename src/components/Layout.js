import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
// Components 
import NavBar from "./Navbar";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles.styles";


const Layout = ({ pageTitle ,children} ) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                }
            }
        }
  `)
    
    return ( 
        <>
            <title>{pageTitle} || {data.site.siteMetadata.title}</title>
            <GlobalStyles />
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;