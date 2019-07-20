import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import { Container } from "react-bootstrap"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
      <Layout>
        <div className="blog-post-container">
        <div className="blog-post">
            <Container className="text-left">
                <h2>{frontmatter.title}</h2>
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
            </Container>
        </div>
        </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`