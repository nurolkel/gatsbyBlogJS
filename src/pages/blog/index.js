import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { Link } from "gatsby";

const ArticleComponent = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-top: 20px;
    h2 , p {
        margin: 20px;
    }
`

const Blog = ({data}) => {


    return ( 
        <Layout pageTitle="Blog Page">
            {data.allMdx.nodes.map(mdxPost => (
                <ArticleComponent key={mdxPost.id}>
                    <h2>
                      <Link to={`/blog/${mdxPost.slug}`}>
                        {mdxPost.frontmatter.title}
                      </Link>
                    </h2>
                    <p>{mdxPost.frontmatter.date}</p>
                </ArticleComponent>
            ))}
        </Layout>
    )
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default Blog;