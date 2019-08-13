import React from "react"
import { Link, graphql } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import Img from 'gatsby-image'
import Layout from "../layouts/page"
import SEO from "../components/seo"

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="About Noel" />
      <Container className="my-5">
        <Row>
        {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
          return (
          <Col xs={{span:6}} key={post.id}>
            <Link to={post.frontmatter.path}>
              <Card style={{ width: '100%' }}>
                <Card.Body>
                  <Card.Title><h4>{post.frontmatter.title}</h4></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{post.frontmatter.date}</Card.Subtitle>
                  <Card.Text className="small">
                  {post.excerpt}...
                  </Card.Text>
                  {/* <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid}/> */}
                </Card.Body>
              </Card>
            </Link>
          </Col>
          );
        })
        }
        </Row>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
                edges {
                  node {
                      excerpt(pruneLength: 100)
                      id          
                      frontmatter {
                        path 
                        title
                        date(formatString: "MMMM DD, YYYY")
                        featuredImage {
                          childImageSharp {
                            fluid(
                              quality: 100
                            ) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                  }      
                }    
        } 
    }`;

