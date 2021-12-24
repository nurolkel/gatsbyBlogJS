import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const BlogMain = styled.div`
    width: 750px;
    margin: 0 auto;

        h3, p {
            text-align: center;
            margin: 20px auto;
        }

        h3 {
            font-size: 28px;
        }
`

const BlogPost = ({ data}) => {
    console.log(data)

    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <BlogMain>
                <h3>{data.mdx.frontmatter.title}</h3>
                <p>written by {data.mdx.frontmatter.author}  ||   {data.mdx.frontmatter.email}</p>
                <p>{data.mdx.frontmatter.date}</p>
                <GatsbyImage 
                    image={image}
                    alt={data.mdx.frontmatter.hero_image_alt}
                />
                <p>
                    Photo Credit:{" "}
                    <a href={data.mdx.frontmatter.hero_image_credit_link}>
                    {data.mdx.frontmatter.hero_image_credit_text}
                    </a>
                </p>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </BlogMain>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
        frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            author
            email
            hero_image_alt
            hero_image_credit
            hero_image_credit_link
            hero_image {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
        body
    }
  }
`


export default BlogPost;