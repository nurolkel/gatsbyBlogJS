// Step 1: Import React
import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const MainStyle = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 , p {
    text-align: center;
    margin: 10px auto;
  }
  img {
    width: 500px;
    margin: 0 auto;
  }
`

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <MainStyle>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/clifford.jpeg"
        />
      </MainStyle>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage