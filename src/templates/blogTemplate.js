import React from "react"
import { graphql } from "gatsby"

export default function Template({
    data, // the prop will be injected into GraphQL query below
}) {
    const { markdownRemark } = data // data.markdownRemark holds our post
    const { frontmatter, html } = markdownRemark
    return (
        <div className="blog-post-container">
          <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.data}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
           />
          </div>
        </div>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
      markdownRemark(frontmatter: { path : { eq: $path }}) {
          html
          frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
          }
      }
  }
`