import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layouts/page"
import SEO from "../components/seo"
import Img from 'gatsby-image'

const Trimet = () => {
  const data = useStaticQuery(graphql`
  query {
    tilikumImage: file(relativePath: { eq: "tilikum.jpg" }) {
      childImageSharp {
        fluid(
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
  }
}
`)
return (
  <Layout>
    <SEO title="About Noel" />
    <Container className='my-5 text-light'>
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <h1 className="display-4">TriMet</h1>
            <h5>Portland, Oregon</h5>
            &nbsp;
            <h5>Role:</h5>
            <p>Web Designer/Developer <span className="text-muted">(Current)</span></p>
            &nbsp;
            <h5>Day to day</h5>
            <p>UX Design, Visual Design, Motion Graphics, Video/Content Production, Animation Storytelling, React Front-end Development, Photography</p>
            &nbsp;
          </Col>
        </Row>
        {/* Image */}
        <Row>
          <Col sm={{span:12}} md={{span:12}}>
            <Img fluid={data.tilikumImage.childImageSharp.fluid} fadeIn={true}/>
          </Col>
        </Row>
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          &nbsp;
          <h3>RiderComm</h3>
          &nbsp;
          <p>At TriMet I work in a team that speaks directly to riders. Riders can range from frequent riders to even non-riders. Understanding how we communicate to each type is vital to the role. We take the time to listen and understand customer feedback, conduct surveys, ask Twitter polls, send nice emails and put together personas that we try to speak to. </p>
          <p>On a day to day, I can be doing a range of different projects from developing MAX arrival screens for the Portland International Airport, taking photos for our growing instagram, to animating traffic patterns for improvement of the roads, to designing logos, it seems to never stop, it’s so fun.</p>
          <p>Here are some projects I’m able to share:</p>
          &nbsp;
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default Trimet
