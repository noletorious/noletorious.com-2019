import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from "../layouts/page"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
    const data = useStaticQuery(graphql`
    query {
      portlandImage: file(relativePath: { eq: "portland-about.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 800
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      noelImage: file(relativePath: { eq: "noel.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 150
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
  <Layout>
    <SEO title="About Noel" />
    <Container className='my-5'>
        <Row>
          <Col>
            <Img fluid={data.portlandImage.childImageSharp.fluid} fadeIn={true} durationFadeIn={1000} className='mb-5'/>
          </Col>
        </Row>
        <Row>
          <Col xs={{span:8, offset:2}} className="text-light ">
            <h3>Portland's Favorite Web Designer  </h3>
            <p>Famous for my hand modeling, I design and develop web interfaces. Creatively I'm a productionist, personally I am a INTP. As a web designer, I'd like to say I help solve problems and build helpful visual content that communicates a message. Learning and building web experiences that are meaningful and with thought is the fun in the challenge. </p>

            <h5>Some personal goals</h5>
            <p>Grow my clothing line</p>
            <p></p>

          </Col>
        </Row>
        <Row>
          <Col>
            <h5>When I'm not designing</h5>
            <p>I'm probably thinking about designing.</p>
          </Col>
          <Col>
            <h5>Designers I appreciate</h5>
            <p>Ghostly ferns</p>
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default About
