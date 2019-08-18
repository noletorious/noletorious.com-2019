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
  },
  {
    year:'2019',
    name: 'New Onsite Transit Tracker',
    status: 'WIP',
    anchorLink: 'onsite'
  },
  {
    year:'2019',
    name: 'Google Earth Flythroughs',
    status: 'Ongoing',
    anchorLink: 'flythroughs'
  },
  {
    year:'2019',
    name: 'Photography: Instagram',
    status: 'Ongoing',
    anchorLink: 'insta'
  },
  {
    year:'2018',
    name: 'PDX Arrival Screens',
    status: 'Phase II',
    anchorLink: 'pdxArrivals'
  },
  {
    year:'2018',
    name: 'New Club, New Blog',
    status: 'Complete',
    anchorLink: 'ridersClub'
  },
  {
    year:'2017',
    name: 'Web Style Guide Lines',
    status: 'Ongoing',
    anchorLink: 'stylesGuide'
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
            <p>Web Designer/Developer <span className="text-muted small">(Current)</span></p>
            &nbsp;
            <h5>Day to day responsibilities:</h5>
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
        <Row className='my-5'>
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
          </Col>
        </Row>
        {/* Open Trip Planner */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          <h3 id="otp">Open Trip Planner</h3>
          <p>This project is still on going so I’m limited to what I can share. This project deserves its own page.</p>
          <a href="http://modbeta.trimet.org/">Enjoy beta <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Onsite Transit Tracker */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          <h3 id="onsite">New Onsite Transit Tracker</h3>
          <p>Improving the UI to arrival information for riders is just straight up fun. It is great to be involved in a design that has such high visibility within the town I live in.</p>
          &nbsp;
          <h5>Problem:</h5>
          <p>With the consideration of upgrading our display screens out in the public, we needed a refresh to the new design. With new infrastructure came new capabilities.</p>
          <p>[insert image of new tracker</p>
          <h5>Research:</h5>
          <p>Questions we asked our riders:</p>
          <p><em>Is the current transit tracker useful?</em></p>
          <p><strong>Purpose of asking:</strong> So we can get a sense of any immediate red flags that people dislike about it. </p>
          <p><strong>Results:</strong> Yes, turns out people trust the information as being more reliable than third-party apps.</p>
          <p><em>What other information would they like to know at their stop?</em></p>
          <p><strong>Purpose of asking:</strong> So we can get a sense of what people want to generally know when looking at these screens.</p>
          <p><strong>Results:</strong> The top want is, vehicle location and it’s relation to where they are.</p>
          <h5>Strategy:</h5>
          <p>With the knowledge we gained by simply asking riders, jump started the design. The two big improvements I wanted to solve was:</p>
          <ul>
            <li>Visibility, increasing contrast and improving the ADA compliance score.</li>
            <li>Context, at a glance users should understand where they are and where their next vehicle is.</li>
            <li>Design, create something elegant.</li>
          </ul>
          <h5>Design:</h5>
          <p>[insert image of new tracker</p>
          <p>Hopefully the new design speaks for itself. But to summarize</p>
          <ul>
            <li>I’ve continued down the dark scheme path because it does perform better with displays outside.</li>
            <li>I’ve included a you are here marker on a map to give users a sense of where they are and where their vehicle is if in the bounded area.</li>
          </ul>
          <a href="#">Enjoy the prototype <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Google Earth Fly Throughs */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          <h3 id="flythroughs">Google Earth Flythroughs</h3>
          <p>This project is still on going so I’m limited to what I can share. This project deserves its own page.</p>
          <a href="http://modbeta.trimet.org/">Enjoy beta <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Instagram Photo */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <h3 id="insta">Instagram Photo</h3>
            <p>This project is still on going so I’m limited to what I can share. This project deserves its own page.</p>
            <a href="http://modbeta.trimet.org/">Enjoy beta <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* PDX Arrival Screens */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <h3 id="pdxArrival">PDX Arrival Screens</h3>
            <p>This project is still on going so I’m limited to what I can share. This project deserves its own page.</p>
            <a href="http://modbeta.trimet.org/">Enjoy beta <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* New Club, New Blog */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <h3 id="ridersClub">New Club, New Blog</h3>
            <p>This project is still on going so I’m limited to what I can share. This project deserves its own page.</p>
            <a href="http://modbeta.trimet.org/">Enjoy beta <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Web Style Guide Lines */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <h3 id="stylesGuide">Web Style Guide Lines</h3>
            <p>This project is still on going so I’m limited to what I can share. This project deserves its own page.</p>
            <a href="http://modbeta.trimet.org/">Enjoy beta <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default Trimet
