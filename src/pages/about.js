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
    <Container className='my-5 text-light'>
        <Row>
          <Col>
            <Img fluid={data.portlandImage.childImageSharp.fluid} fadeIn={true} durationFadeIn={1000} className='mb-5'/>
          </Col>
        </Row>
        <Row style={{marginTop:'-10em'}}>
          <Col xs={{span:12}} sm={{span:8, offset:2}}>
            <div className="px-3 body-bg">
              {/* <Img
                fluid={data.noelImage.childImageSharp.fluid} 
                fadeIn={true} durationFadeIn={1000} 
                className="rounded-circle"
                style={{maxWidth:'100px'}}
              /> */}
              <h3 className="mb-0 py-3">Hello world!</h3>
              <p>I’m an purpose-driven designer who cares about designing enjoyable products for <em>people</em>. I've worked in various web design roles from visual design, apparel design, content strategy, 2D animations, UX design, and web development. Through my experience I've developed an interdisciplinary skillset with an eye for what is good design and a focus on interaction design.</p>
              &nbsp;
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{span:12}} sm={{span:8, offset:2}}>
            <div className="px-3">
            <h5><span role="img" aria-label="artist">🎨 </span> My creative type:</h5>
              <p><a target="_blank" href="https://mycreativetype.com/type/producer/" rel="noopener noreferrer">Producer</a></p>&nbsp;
              <h5><span role="img" aria-label="golfer">🏌️</span> When I'm not designing:</h5>
              <p>Probably golfing!</p>&nbsp;
              <h5><span role="img" aria-label="designers">👍 </span>Designers I appreciate:</h5>
              <p>Technically: Jared Spool, Visually: There are too many good UX designers out there, so I'm choosing an animator, Markus Magnusson.</p>&nbsp;
              <h5><span role="img" aria-label="music">🎵</span> Current jam:</h5>
              <p>Awake by Tycho</p>&nbsp;
            </div>
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default About
