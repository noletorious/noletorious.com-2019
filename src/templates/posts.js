import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/page'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Template({ data }) {
    const { markdownRemark: post } = data;
    //const post = data.markdownRemark;
    return (
        <>
            <Layout>         
            <Container className="pt-5">
                <Row>
                    <Col>
                        <h1>{post.frontmatter.title}</h1>
                        <div 
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: post.html }}
                        />
                    </Col>
                </Row>
            </Container>
            </Layout>
        </>
        )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter:{ path:{eq: $path} }){
            html
            frontmatter{
                path
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`
