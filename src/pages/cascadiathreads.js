import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layouts/page"
import SEO from "../components/seo"
import Img from 'gatsby-image'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import Scrollchor from 'react-scrollchor';

const cascadiaThreads = () => {
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
  trimetWhiteImage: file(relativePath: { eq: "trimet-white.png" }) {
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
const projects = [
  {
    year:'2019',
    name: 'Open Trip Planner',
    status: 'WIP',
    anchorLink: 'otp'
  }
]
return (
  <Layout>
    <SEO title="About Noel" />
    <Container className='my-5 text-light'>
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <Img fluid={data.trimetWhiteImage.childImageSharp.fluid} style={{maxWidth:'200px', marginLeft:'-.5em'}}/>
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
          <p>I work in a team that speaks directly to our customers which are public transit riders. However, riders can range from frequent riders to even non-riders. Understanding how we communicate to each type is vital to the role. At TriMet, we take the time to listen and understand customer feedback by conducting surveys, asking Twitter polls, and sending nice emails directly to them. Through this process we build rider personas that we try to speak to through our messaging and design. </p>
          <p>On a day to day basis my work can range from developing a MAX arrival screens for the Portland International Airport, to taking photos for our instagram on my way to work, to animating traffic patterns when there are road improvements, to designing logos. Work seems endless but very fun.</p>
          <p>Here are some projects I’m able to share:</p>
          &nbsp;
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Year</th>
                <th>Project</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project)=>(
                <tr>
                  <td>{project.year}</td>
                  <td>{project.name}</td>
                  <td>{project.status}</td>
                  <td className="text-center">
                    <Scrollchor to={'#'+project.anchorLink}>
                      <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                    </Scrollchor>
                  </td>
                </tr>
              ))
              }
            </tbody>
          </Table>
          &nbsp;
          <div className="py-3"></div>
          &nbsp;
          <h3 id="otp">Open Trip Planner</h3>
          <p>This project is still on going so I’m limited to what I can share. This project deserves its own page.</p>
          <a href="http://modbeta.trimet.org/">Enjoy beta <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default cascadiaThreads
